const express = require("express"); 
const router = express.Router();
const User = "../models/user";

// router.post("/",async(req,res)=>{
//     try{
//     console.log("working properly");
//     let {username,password,email,age} = req.body;
//     console.log(req.body);
//     let newuser = new User({username,email,age});
//     let registeruser = await User.register(newuser,password)
//     console.log(registeruser);
//     // await registeruser.save();
//     console.log("registeruser");
//     // res.redirect("/");
//     }
//      catch (error) {
//       console.log("error");
//     res.status(500).json({
//       success: false,
//       message: "Error saving data"
//     });
//   }
// // //     // req.login(registeruser, (err)=> {
// // //     //  if (err) { return next(err); }
// // //     // req.flash("success","Welcome to Wanderlust!");
//     })
// })
// module.exports = router;