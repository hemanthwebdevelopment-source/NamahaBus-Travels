// const nodemailer = require("nodemailer");

// // Create a transporter using SMTP
// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true, // use STARTTLS (upgrade connection to TLS after connecting)
//   auth: {
//     user: "sakarayheman@gmail.com",
//     pass: "nneyxzcjmyfkgxjw",
//   },
// });

// function sendMail(to,sub,msg){
//     transporter.sendMail({
//         to:to,
//         subject:sub,
//         html:msg
//     });
//     console.log("email sent");
// }

// sendMail("sakaraybaburao@gmail.com","I am hemanth","This is text message");




require("dotenv").config();


// store otp temporarily
const otpStore = {};

// nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// SEND OTP
app.post("/Emailsignup", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email required",
      });
    }

    // generate 6 digit otp
    const otp = Math.floor(
      100000 + Math.random() * 900000
    );

    // store otp
    otpStore[email] = otp;

    // send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "OTP Verification",

      text: `Your OTP is ${otp}`,
    });

    // auto delete after 5 min
    setTimeout(() => {
      delete otpStore[email];
    }, 5 * 60 * 1000);

    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to send OTP",
    });
  }
});

// VERIFY OTP
app.post("/Emailsignup", (req, res) => {
  try {
    const { email, otp } = req.body;

    if (otpStore[email] == otp) {
      delete otpStore[email];

      return res.status(200).json({
        success: true,
        message: "OTP verified successfully",
      });
    }

    return res.status(400).json({
      success: false,
      message: "Invalid OTP",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

