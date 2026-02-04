export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, email, caseDetails } = req.body;

    // Log the form submission
    console.log('New consultation request:', {
      name,
      phone,
      email,
      caseDetails,
      timestamp: new Date().toISOString()
    });

    // Send email using configured service
    await sendEmail({
      name,
      phone,
      email,
      caseDetails
    });

    return res.status(200).json({
      success: true,
      message: 'Consultation request received successfully'
    });

  } catch (error) {
    console.error('Error processing form submission:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: 'There was an error processing your request'
    });
  }
}

async function sendEmail({ name, phone, email, caseDetails }) {
  // Check which email service is configured
  if (process.env.SENDGRID_API_KEY) {
    return await sendWithSendGrid({ name, phone, email, caseDetails });
  } else if (process.env.MAILGUN_API_KEY) {
    return await sendWithMailgun({ name, phone, email, caseDetails });
  } else if (process.env.AWS_ACCESS_KEY_ID) {
    return await sendWithSES({ name, phone, email, caseDetails });
  } else if (process.env.SMTP_HOST) {
    return await sendWithSMTP({ name, phone, email, caseDetails });
  } else {
    // No email service configured - just log
    console.log('No email service configured. Form data logged only.');
    return;
  }
}

// SendGrid implementation
async function sendWithSendGrid({ name, phone, email, caseDetails }) {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: process.env.SENDGRID_TO_EMAIL || 'rishisinghlaw@outlook.com',
    from: process.env.SENDGRID_FROM_EMAIL || 'rishisinghlaw@outlook.com',
    subject: `New Consultation Request - ${name}`,
    html: `
      <h2>New Consultation Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Case Details:</strong></p>
      <p>${caseDetails}</p>
      <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
    `
  };

  await sgMail.send(msg);
}

// Mailgun implementation
async function sendWithMailgun({ name, phone, email, caseDetails }) {
  const formData = new URLSearchParams();
  formData.append('from', process.env.MAILGUN_FROM_EMAIL || 'rishisinghlaw@outlook.com');
  formData.append('to', process.env.MAILGUN_TO_EMAIL || 'rishisinghlaw@outlook.com');
  formData.append('subject', `New Consultation Request - ${name}`);
  formData.append('html', `
    <h2>New Consultation Request</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Case Details:</strong></p>
    <p>${caseDetails}</p>
    <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
  `);

  const response = await fetch(`https://api.mailgun.net/v3/${process.env.MAILGUN_DOMAIN}/messages`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${Buffer.from(`api:${process.env.MAILGUN_API_KEY}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData
  });

  if (!response.ok) {
    throw new Error('Failed to send email via Mailgun');
  }
}

// AWS SES implementation
async function sendWithSES({ name, phone, email, caseDetails }) {
  const AWS = require('aws-sdk');
  const ses = new AWS.SES({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION || 'us-east-1'
  });

  const params = {
    Destination: {
      ToAddresses: [process.env.SES_TO_EMAIL || 'rishisinghlaw@outlook.com']
    },
    Message: {
      Body: {
        Html: {
          Data: `
            <h2>New Consultation Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Case Details:</strong></p>
            <p>${caseDetails}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          `
        }
      },
      Subject: {
        Data: `New Consultation Request - ${name}`
      }
    },
    Source: process.env.SES_FROM_EMAIL || 'rishisinghlaw@outlook.com'
  };

  await ses.sendEmail(params).promise();
}

// SMTP implementation
async function sendWithSMTP({ name, phone, email, caseDetails }) {
  const nodemailer = require('nodemailer');

  const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  const mailOptions = {
    from: process.env.SMTP_FROM || 'rishisinghlaw@outlook.com',
    to: process.env.SMTP_TO || 'rishisinghlaw@outlook.com',
    subject: `New Consultation Request - ${name}`,
    html: `
      <h2>New Consultation Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Case Details:</strong></p>
      <p>${caseDetails}</p>
      <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
    `
  };

  await transporter.sendMail(mailOptions);
}
