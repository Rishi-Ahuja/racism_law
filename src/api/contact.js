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

    // In production, you would send an email here using a service like:
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - Nodemailer with SMTP

    // For now, we'll just return success
    // The form data is logged and can be accessed in Vercel logs
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
