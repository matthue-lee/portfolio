import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const formData = await request.json();

    const { name, email, topic, message, newsletter } = formData;
    console.log(process.env.SMTP_USER)
    // Validate form data
    if (!name || !email || !topic || !message) {
      return new Response(
        JSON.stringify({ success: false, message: 'All fields are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'tansenmatt@gmail.com', // Replace with your email
      subject: `New Contact Form Submission: ${topic}`,
      text: `You have a new message from ${name} (${email}):
      
Topic: ${topic}
Message: ${message}
Newsletter Sign-Up: ${newsletter ? 'Yes' : 'No'}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Failed to send email.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
