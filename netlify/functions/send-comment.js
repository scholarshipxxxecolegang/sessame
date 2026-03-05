const sgMail = require('@sendgrid/mail');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);

    if (!name || !message || name.trim() === '' || message.trim() === '') {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Name and message are required' }),
      };
    }

    if (!process.env.SENDGRID_API_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'SENDGRID_API_KEY is not configured' }),
      };
    }

    const from = process.env.SENDGRID_FROM_EMAIL;
    const to = process.env.SENDGRID_TO_EMAIL || 'appexdev4@gmail.com';

    if (!from) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'SENDGRID_FROM_EMAIL is not configured' }),
      };
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const safeEmail = email ? String(email).replace(/</g, '&lt;').replace(/>/g, '&gt;') : 'Non renseigne';
    const safeMessage = String(message).replace(/</g, '&lt;').replace(/>/g, '&gt;');

    await sgMail.send({
      to,
      from,
      subject: `Nouveau retour SESSAME de ${name}`,
      text: `Nom: ${name}
Email: ${email || 'Non renseigne'}
Message:
${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nouveau retour client SESSAME</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
            ${safeMessage}
          </p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #999; font-size: 12px;">Email envoye automatiquement par le formulaire SESSAME</p>
        </div>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Email envoye avec succes' }),
    };
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Erreur lors de l\'envoi de l\'email',
        details: error?.message || 'Unknown error',
      }),
    };
  }
};
