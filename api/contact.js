export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = req.body;

    // Support both new intake form and legacy contact form
    const payload = normalizePayload(body);
    console.log('New submission:', { ...payload, timestamp: new Date().toISOString() });

    await sendEmail(payload);

    return res.status(200).json({
      success: true,
      message: 'Submission received successfully'
    });
  } catch (error) {
    console.error('Error processing submission:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: 'There was an error processing your request'
    });
  }
}

function normalizePayload(body) {
  // New intake form fields
  if (body.fullName != null || body.institutionName != null) {
    return {
      name: body.fullName || '',
      email: body.email || '',
      phone: body.phone || '',
      cityProvince: body.cityProvince || '',
      institutionName: body.institutionName || '',
      institutionType: body.institutionType || '',
      datesOfIncident: body.datesOfIncident || '',
      description: body.description || '',
      filedComplaints: body.filedComplaints || '',
      ongoingProceedings: body.ongoingProceedings || '',
      consent: body.consent,
    };
  }
  // Legacy form
  return {
    name: body.name || '',
    email: body.email || '',
    phone: body.phone || '',
    caseDetails: body.caseDetails || body.message || '',
  };
}

function buildHtml(payload) {
  if (payload.institutionName != null) {
    return `
      <h2>Confidential Case Submission</h2>
      <p><strong>Full Name:</strong> ${escape(payload.name)}</p>
      <p><strong>Email:</strong> ${escape(payload.email)}</p>
      <p><strong>Phone:</strong> ${escape(payload.phone)}</p>
      <p><strong>City / Province:</strong> ${escape(payload.cityProvince)}</p>
      <p><strong>Institution Name:</strong> ${escape(payload.institutionName)}</p>
      <p><strong>Type of Institution:</strong> ${escape(payload.institutionType)}</p>
      <p><strong>Date(s) of Incident:</strong> ${escape(payload.datesOfIncident)}</p>
      <p><strong>Description:</strong></p>
      <p>${escape(payload.description)}</p>
      <p><strong>Filed complaints:</strong> ${escape(payload.filedComplaints)}</p>
      <p><strong>Ongoing proceedings:</strong> ${escape(payload.ongoingProceedings)}</p>
      <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
    `;
  }
  return `
    <h2>New Consultation Request</h2>
    <p><strong>Name:</strong> ${escape(payload.name)}</p>
    <p><strong>Phone:</strong> ${escape(payload.phone)}</p>
    <p><strong>Email:</strong> ${escape(payload.email)}</p>
    <p><strong>Case Details:</strong></p>
    <p>${escape(payload.caseDetails)}</p>
    <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
  `;
}

function escape(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function sendEmail(payload) {
  const name = payload.name || payload.fullName || 'Submission';
  const html = buildHtml(payload);

  if (process.env.SENDGRID_API_KEY) {
    return await sendWithSendGrid(name, html);
  }
  if (process.env.MAILGUN_API_KEY) {
    return await sendWithMailgun(name, html);
  }
  if (process.env.AWS_ACCESS_KEY_ID) {
    return await sendWithSES(name, html, payload);
  }
  if (process.env.SMTP_HOST) {
    return await sendWithSMTP(name, html);
  }
  console.log('No email service configured. Submission logged only.');
}

async function sendWithSendGrid(name, html) {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  await sgMail.send({
    to: process.env.SENDGRID_TO_EMAIL || 'rishisinghlaw@outlook.com',
    from: process.env.SENDGRID_FROM_EMAIL || 'rishisinghlaw@outlook.com',
    subject: `Confidential Case Submission - ${name}`,
    html,
  });
}

async function sendWithMailgun(name, html) {
  const formData = new URLSearchParams();
  formData.append('from', process.env.MAILGUN_FROM_EMAIL || 'rishisinghlaw@outlook.com');
  formData.append('to', process.env.MAILGUN_TO_EMAIL || 'rishisinghlaw@outlook.com');
  formData.append('subject', `Confidential Case Submission - ${name}`);
  formData.append('html', html);

  const response = await fetch(`https://api.mailgun.net/v3/${process.env.MAILGUN_DOMAIN}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`api:${process.env.MAILGUN_API_KEY}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData,
  });
  if (!response.ok) throw new Error('Failed to send email via Mailgun');
}

async function sendWithSES(name, html, payload) {
  const AWS = require('aws-sdk');
  const ses = new AWS.SES({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION || 'us-east-1',
  });
  await ses.sendEmail({
    Destination: { ToAddresses: [process.env.SES_TO_EMAIL || 'rishisinghlaw@outlook.com'] },
    Message: {
      Body: { Html: { Data: html } },
      Subject: { Data: `Confidential Case Submission - ${name}` },
    },
    Source: process.env.SES_FROM_EMAIL || 'rishisinghlaw@outlook.com',
  }).promise();
}

async function sendWithSMTP(name, html) {
  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || 587,
    secure: false,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  await transporter.sendMail({
    from: process.env.SMTP_FROM || 'rishisinghlaw@outlook.com',
    to: process.env.SMTP_TO || 'rishisinghlaw@outlook.com',
    subject: `Confidential Case Submission - ${name}`,
    html,
  });
}
