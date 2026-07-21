const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Users = require("./models/user")
const cors = require("cors");
const userRoute = require("./routers/user")
const search = require("./models/search");
const Bus = require("./models/Bus");
const BusDetails = require("./models/BusDetails");
const nodemailer = require("nodemailer");
// const wrapasync = require("./Utils/Wrapasync");
const session = require('express-session')
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const otpStore = {};
const Razorpay = require("razorpay");
const seatselected = require("./models/seatsselection");
const verifyPayment = require("./Middleware/verifypayment");
const isOwner = require("./Middleware/owner.js");
// const verifyEmail = require("./Middleware/login");
const ExpressError = require("./Utils/Express");
// const {BusSchema} = require("./Schema.js");
// const flash = require("connect-flash");
const TicketBooked = require("./models/Tickets.js");
const isLoggedIn = require("./Middleware/login.js");
// const passport = require("passport");
// nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SEND_MAIL,
    pass: process.env.MAIL_PASSWORD,
  },
});
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true
//   })
// );

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

//with this code it will run locally and deployment also

// const allowedOrigins = [
//   "http://localhost:5173",
//   process.env.FRONTEND_URL,
// ];

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//   })
// );


// const sessionOptions = {
//    secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie:{
//       expires:Date.now() + 7 * 24 * 60 * 60 *1000,
//       maxAge: 7 *24 *60*60*1000,  
//       httpOnly:true,   
//     }
// }
// app.use(session(sessionOptions));
// app.use(flash());
app.use(cookieParser());
// app.use((req,res,next)=>{
//   res.locals.success = req.flash("success");
//   next;
// })
// console.log(Date.now() + 7 *24 *60*60*1000);
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

// let url = "https://localhost:3000";
const MONGO_URL = process.env.MONGO_URL;
main()
.then(()=>{
    console.log("connectiom successful");
}).catch((err)=>{console.log(err)});
async function main(){
   await mongoose.connect(MONGO_URL);
};
app.get("/",(req,res)=>{
    res.send("hello");
});
// app.use("/signup",userRoute);
// app.post("/signup",async(req,res)=>{
//     try{
//       console.log(req.user);
//     console.log("working properly");
//     let {username,password,email,age} = req.body;
//     console.log(req.body);
//     let newuser = new Users({username,email,age});
//     let registeruser = await Users.register(newuser,password)
//     console.log(registeruser);
//     // console.log("registeruser");
//     // res.redirect("/");
//     }
//      catch (error) {
//       console.log("error");
//     res.status(500).json({
//       success: false,
//       message: "Error saving data"
//     });
//   }
//     req.login(registeruser, (err)=> {
//      if (err) { return next(err); }
//     req.flash("success","Welcome to Wanderlust!");
// })
// })
// app.post("/login",async(req,res)=>{
//     let {username,password} = req.body;
//     let user = User.findOne({username});
//     let islogged =await bcrypt.compare(password, user.hash);
//     if(!islogged){
//         res.status(400);
//     }
//     else
//         res.send("you signed in ");
// })




app.get("/destination",async(req,res)=>{
  try{
    console.log(req.user);
  let {from,to,date} = req.query;
  // console.log(req.body);
    // console.log(req.body);
    // let destiny = new search({from,to,date});
    // console.log(destiny);
    // const data = {from,to,date};
    // await destiny.save();
    // let destinations = await search.register(destiny,date);
    console.log("i am destination");
    res.status(200).json({
      success: true,
      message: "Data saved successfully",
      data:from,to,date
    });
   }
     catch (error) {
      console.log("error");
      res.status(500).json({
      success: false,
      message: "Error saving data"
    });
  }      
})

// app.post("/addbus", async (req, res) => {
//   const bus = await Bus.create({
//     busName: "KPN Travels",
//     noOfBuses: 12,
//     seatsAvailable: 28
//   });

//   res.json(bus);
// });

app.put("/update/:id",isOwner,async(req,res)=>{
  try{
 const { id } = req.params;
 const { formData } = req.body;
      // console.log(id);
    const bus = await Bus.findByIdAndUpdate(id,formData,
       {
        returnDocument: "after", // replaces deprecated new:true
      });
    //  req.flash("success","New bus added");
    res.status(200).json({
      success: true,
      bus,
      }
  );
  } 
  catch (err) {
    // console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }

})

app.post("/addBus",isOwner,async (req, res) => {
  try {
    // if(!req.isAuthenticated()){
    //   console.log("i am logged in")
    //     req.session.redirectUrl= req.originalUrl;
    //     req.flash("error","you must be logged in to create listing");
    //     return res.redirect("/login");
    // }
//     passport.use(new LocalStrategy(
//   function(username, password, done) {
//     Users.findOne({ username: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) { return redirect("/"); }
//       // if (!user.verifyPassword(password)) { return done(null, false); }
//       // return done(null, user);
//     });
//   }
// ));
    // console.log(verifyEmail);
    
    // console.log(req.body); 
    // Check if data arrives
    //  if(!req.isAuthenticated()){
    //     alert("you must be logged in ");
    //     return res.redirect("/Emailsignup")
    //  } 
    //  res.render("/addBus");
    // let result = BusSchema.validate(req.body);
    // console.log(result);
    const bus = new Bus(req.body);
    await bus.save();
    // req.flash("success","New bus added");
    res.status(201).json({
      success: true,
      bus,
      }
  );
  } 
  catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

app.get("/searchlist",async(req, res) => {
  // try {
    let {from,to,date} = req.query;
    // console.log(req.body);
    // const buses = await Bus.find({from,to,date});
    const buses = await Bus.find({
  from: new RegExp(from, "i"),
  to: new RegExp(to, "i"),
  date
})
 if (buses.length === 0) {
    // throw new ExpressError(404, "No buses available");
    // console.log("No buses found");
  return res.status(404).json({
    success: false,
    message: "No buses available"
  });
  }
    
    // console.log(buses);
       res.status(200).json({
      success: true,
      buses
    })
// } catch (error) {
//      console.log(error);
//     res.status(500).json({
//       success: false,
//       message: "Server Error"
//     });
//     res.json(buses);
//   }
});

app.get("/BusDetails",async(req, res) => {
  try {
    let {from,to,date} = req.query;
    console.log(req.query);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedDate = new Date(date);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      return res.status(400).json({
        success: false,
        message: "Cannot book tickets for past dates.",
      });
    }
    const journeyDate = new Date(date);

const dayName = new Date(date).toLocaleString("en-US", {
  weekday: "long",
});

console.log(dayName); // Monday
    const busesDetails = await BusDetails.find({
      from: new RegExp(from, "i"),
  to: new RegExp(to, "i"),
    $or: [
    { scheduleType: "Daily" },
    {
      scheduleType: "Weekly",
      operatingDays: dayName,
    },
  ],
});
    // console.log(busesDetails);
     if (busesDetails.length === 0) {
    // throw new ExpressError(404, "No buses available");
    // console.log("No buses found");
  return res.status(404).json({
    success: false,
    message: "No buses available"
  });
  }
   const updatedBuses = busesDetails.map((bus) => {
  // User selected journey date
  const startDate = new Date(date);

  // ---------- Departure Time ----------
  let [depTime, depMeridian] = bus.departure.split(" ");
  let [depHour, depMinute] = depTime.split(":").map(Number);

  if (depMeridian === "PM" && depHour !== 12) depHour += 12;
  if (depMeridian === "AM" && depHour === 12) depHour = 0;

  startDate.setHours(depHour, depMinute, 0, 0);

  // ---------- Arrival Time ----------
  const endDate = new Date(startDate);

  let [arrTime, arrMeridian] = bus.arrival.split(" ");
  let [arrHour, arrMinute] = arrTime.split(":").map(Number);

  if (arrMeridian === "PM" && arrHour !== 12) arrHour += 12;
  if (arrMeridian === "AM" && arrHour === 12) arrHour = 0;

  endDate.setHours(arrHour, arrMinute, 0, 0);

  // Next-day arrival
  if (endDate <= startDate) {
    endDate.setDate(endDate.getDate() + 1);
  }

  return {
    ...bus.toObject(),

    // User selected journey date
    journeyDate: date,

    // Calculated dates
    startDate,
    endDate,
  };
});
console.log(updatedBuses);
res.status(200).json({
  success: true,
  busesDetails: updatedBuses,
});
    // res.json(busesDetails);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

app.put("/BusDetails/:id",isOwner,async(req,res)=>{
  try{
 const { id } = req.params;
 const { formData } = req.body;
      // console.log(id);
    const bus = await BusDetails.findByIdAndUpdate(id,formData,
       {
        returnDocument: "after", // replaces deprecated new:true
      });
    //  req.flash("success","New bus added");
    res.status(200).json({
      success: true,
      bus,
      }
  );
  } 
  catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
})

app.post("/AddBusDetails",isOwner,async(req,res)=>{
     try {
    // console.log(req.body); // Check if data arrives
      // console.log(req.body);
       console.log("Received:", req.body);
    const busDetails = new BusDetails(req.body);
     console.log("Before Save:", busDetails);

    await busDetails.save();
    console.log("Saved:", busDetails);
     res.status(201).json({
      success: true,
      busDetails,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
})

// app.post("/SeatSelection",async(req,res)=>{
//   // let [selectedSeats] = req.body;
//   console.log(req.body);
// })

app.delete("/delete/:id",isOwner,async(req,res)=>{
  try{
      const { id } = req.params;
      // console.log(id);
      await Bus.findByIdAndDelete(id);
      res.json({
      success: true,
      message: "Bus deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
})

app.delete("/BusDetails/:id",isOwner,async(req,res)=>{
  try{
      const { id } = req.params;
      // console.log(id);
      await BusDetails.findByIdAndDelete(id);
      res.json({
      success: true,
      message: "Bus deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
})

app.get("/tickets", isLoggedIn, async (req, res) => {
  try {  
    let tickets;

    if (
      req.user.role ===
      "admin"
    ) {
      // Owner sees all tickets
      tickets = await TicketBooked.find()
        .populate("userId")
        .populate("busId")
        .sort({ bookedAt: -1 });
    } else {
      // Normal user sees only their tickets
      tickets = await TicketBooked.find({
        userId: req.user.userid,
      })
        .populate("busId")
        .sort({ bookedAt: -1 });
    }
    console.log(tickets);
    res.status(200).json({
      success: true,
      tickets,
      isOwner:
        req.user.role === "admin",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

app.post("/owner/tickets",isOwner, async (req, res) => {
  try {
    const { serviceNo, journeyDate } = req.body;

    const query = {
      paymentStatus: "paid",
    };

    if (serviceNo) {
      query["busDetails.serviceNo"] = serviceNo;
    }

    if (journeyDate) {
      const start = new Date(journeyDate);
      start.setHours(0, 0, 0, 0);

      const end = new Date(journeyDate);
      end.setHours(23, 59, 59, 999);

      query["busDetails.journeyDate"] = {
        $gte: start,
        $lte: end,
      };
    }

    const tickets = await TicketBooked.find(query).populate(
      "userId",
      "username"
    );

    const totalRevenue = tickets.reduce(
      (sum, ticket) => sum + ticket.amount,
      0
    );

    const totalTickets = tickets.reduce(
      (sum, ticket) => sum + ticket.passengers.length,
      0
    );

    res.json({
      tickets,
      totalRevenue,
      totalTickets,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


app.post("/SeatSelection",isLoggedIn,verifyPayment,async(req, res) => {
  try{
      const userId = req.user.userid;
      console.log(userId);
    console.log(req.body);
  const { bookedSeats,email,passengers,seats,trip,totalprice} = req.body;
  const seatSelected = await seatselected.insertMany(bookedSeats);
   console.log(passengers);
   const passengerDetails = `
🚌 BUS TICKET CONFIRMED

Service No : ${trip.serviceNo}
Bus Type   : ${trip.type}
Date       : ${trip.startDate}

From       : ${trip.from}
To         : ${trip.to}

Departure  : ${trip.departure}
Arrival    : ${trip.arrival}
Duration   : ${trip.duration}

----------------------------------

${passengers.map((passenger, index) => `
Passenger ${index + 1}

Name   : ${passenger.name}
Age    : ${passenger.age}
Gender : ${passenger.gender}
Seat   : ${passenger.seat}
`).join("\n")}

----------------------------------

Status : Confirmed ✅

Happy Journey!
`;

// const ticket = await new TicketBooked(userId,trip.id,passenger.seat,trip.startDate,totalprice);
  //  await ticket.save();
  const ticket = new TicketBooked({
  userId: req.user.userid,
  busId: trip._id,
    busDetails: {
    serviceNo: trip.serviceNo,
    // name: trip.name,
    // companyName: trip.companyName,
    type: trip.type,
    from: trip.from,
    to: trip.to,
    departure: trip.departure,
    arrival: trip.arrival,
    // duration: bus.duration,
    // price: bus.price,
    journeyDate: trip.startDate,
  },

  passengers,
  amount: totalprice,
});

await ticket.save();
const bookedCount = bookedSeats.length;

const updatedBus = await BusDetails.findByIdAndUpdate(
  trip._id,
  {
    $inc: {
      seatsLeft: -bookedCount,
    },
  },
  { new: true }
);

if (!updatedBus) {
  return res.status(404).json({
    success: false,
    message: "Bus not found",
  });
}
//    const passengerDetails = passengers.map((passenger,index) => {

//   return `
// Passenger ${index + 1}

// Name : ${passenger.name}
// Age : ${passenger.age}
// Seat : ${passenger.seat}
// `;

// }).join("\n");
  // console.log(bookedSeats);
  // console.log(seatSelected);
  // await seatSelected.save();
  if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email required",
      });
    }
      // send email
    await transporter.sendMail({
      from: process.env.SEND_MAIL,
      to: email,
      subject: "Ticket Sending",
      text: passengerDetails,
    });
     res.status(200).json({
      success: true,
      message: "Seats booked successfully",
      data: seatSelected,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});
 app.get("/SeatSelection/:busId",async (req, res) => {
  try {
   const { busId } = req.params;
    const { journeyDate } = req.query;
    const seats = await seatselected.find({busId,
    journeyDate});
     res.status(200).json(seats);
  } catch (err) {
    console.log(err);
     res.status(500).json({
      message: "Error fetching seats",
    });
  }
});
  // res.json(seatsselected);

app.post("/payment",async(req,res)=>{
  try{
  const razorpay = new Razorpay({
      key_id:process.env.RAZORPAY_KEY_ID,
      key_secret:process.env.RAZORPAY_SECRET
  });
  const {amount,currency,receipt,email} = req.body;
  // console.log(passengers);
//   const passengerDetails = passengers.map((passenger,index) => {

//   return `
// Passenger ${index + 1}

// Name : ${passenger.name}
// Age : ${passenger.age}
// Seat : ${passenger.seat}
// `;

// }).join("\n");
    // console.log(name,age);
  // console.log(options);
const payment = await razorpay.orders.create({amount:amount*100,currency,receipt});
  // console.log(payment)
  // console.log(verifyPayment);
  if(payment){
    console.log("i am runnning")
          // const { email,name,age } = req.body;
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email required",
      });
    }
  //     // send email
  //   await transporter.sendMail({
  //     from: "sakarayheman@gmail.com",
  //     to: email,
  //     subject: "Ticket Sending",
  //     text: passengerDetails,
  //   });
   }
      // console.log("payment successful")
       res.json(payment);
}catch(err){
  res.status(500).send(err);
      res.send("Error you select the seat");

}
})

app.post("/send-otp", async (req, res) => {
  try {
    const { email } = req.body;
    console.log("send-otp route hit");
      console.log(req.body);
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
      from: process.env.SEND_MAIL,
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

app.post("/verify-otp", async (req, res) => {
  try {
    const { email, otp, username } = req.body;

    if (!otpStore[email]) {
      return res.status(400).json({
        success: false,
        message: "OTP expired or not found",
      });
    }

    if (otpStore[email] != otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    delete otpStore[email];

    // Check if user already exists
    let user = await Users.findOne({ email });

    // If not found, create new user
    if (!user) {
  user = await Users.create({
    username,
    email,
    role:
      email === process.env.OWNER
        ? "admin"
        : "user",
  });
}
      console.log(user.username);
      console.log(user.role);
    // Generate token for both existing and new users
const token = jwt.sign(
  {
    email: user.email,
    userid: user._id,
    // username: user.username,
    role: user.role,
  },
   process.env.JWT_SECRET
);

    res.cookie("token", token, {
        httpOnly: true,
       secure: true,
       sameSite: "none",
       path: "/",
       maxAge: 24 * 60 * 60 * 1000,
    });
    return res.status(200).json({
      success: true,
      message: "OTP verified successfully",
      user,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});


app.get("/check-auth", isLoggedIn, (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
});

app.get("/ownerBusInfo",isOwner,async(req,res)=>{
  try{
   let businfo = await BusDetails.find();
  //  console.log(businfo);
    if (businfo.length === 0) {
  return res.status(404).json({
    success: false,
    message: "No buses found",
  });
}
   res.status(200).json({
      success: true,
      businfo,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
})

app.post("/logout", (req, res) => {
  console.log("Before:", req.cookies);

  if(req.cookies.token === undefined)  return res.status(401).json({
        success:false,
        message:"Login required"
    });

  res.clearCookie("token", {path: "/",});
  console.log("Logout route called");

  res.json({ success: true });
});
app.all(/.*/,(req,res,next)=>{
    next(new ExpressError(404,"page not found"));
});
app.use((err,req,res,next)=>{
    let {statusCode=500,message="Something went wrong"} = err;
    res.status(statusCode).json({
        success: false,
        message,
    });
    })

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
//   app.listen(3000,()=>{
//     console.log("Running at port 3000");
// })