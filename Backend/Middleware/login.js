// const User = require("../Backend/models/user")
// const  = require("./models/User");

// const verifyEmail = async (req, res, next) => {
//   try {
//     const { email } = req.body;
//       console.log(req.body);
//     const user = await User.findOne({ email });

//     if (!user) {
//          res.redirect("/");
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//      });
//     }

//     if (!user.isVerified) {
//       return res.status(403).json({
//         success: false,
//         message: "Please verify your email first",
//       });
//     }

//     // req.user = user;
//     next();
//   } catch (error) {
//     console.log(error);

//     return res.status(500).json({
//       success: false,
//       message: "Server Error",
//     });
//   }
// };

// module.exports = verifyEmail;

function isLoggedIn(req, res, next) {
    const token = req.cookies.token;
   console.log("Token",token);
    if (!token) {
        // return res.status(401).json({
        //     success: false,
        //     message: "You must login"
        // });
          return res.redirect("/Emailsignup");
    }

    try {
        const data = jwt.verify(token,process.env.JWT_SECRET);

        req.user = data; // { email: ..., iat: ..., exp: ... }

        next();
    } catch (err) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });
    }
}

module.exports = isLoggedIn;