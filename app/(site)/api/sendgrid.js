import sendgrid from "@sendgrid/mail";

const sendGridKey = process.env.SENDGRID_API_KEY;

sendgrid.setApiKey(sendGridKey);

console.log(sendGridKey);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "webdesigner@indocosmo.com", // Your email where you'll receive emails
      from: "webdesigner@indocosmo.com", // your website email address here
      subject: `[Lead from website] : ${req.body.subject}`,
      html: `
      
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>Niko Travels</title>
        <meta name="description" content="Niko Travels">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.message}</p>
              <br>
              </div>
              <img src="" class="logo-image" style="height: 50px;width: 50px;border-radius: 5px;overflow: hidden;">
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Manu Arora<br>Software Developer<br>+91 9587738861</p>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
                <a href="/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Blog</a>
                <a href="" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
                <a href="" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Instagram</a>
                <a href="" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
                <a href="" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Twitter</a>
                
              </div>
              </div>
      </body>
      </html>
      
      `,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;