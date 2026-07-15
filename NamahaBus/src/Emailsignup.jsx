// import React, { useState } from "react";
// import axios from "axios";
// export default function  Emailsignup(){
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");

//   // send otp
//   const sendOtp = async () => {
//     try {
//       const res = await axios.post(
//         "http://localhost:3000/send-otp",
//         { email }
//       );

//       alert(res.data.message);
//     } catch (error) {
//       console.log(error);
//     }
//   };

// //   verify otp
//   const verifyOtp = async () => {
//     try {
//       const res = await axios.post(
//         "http://localhost:3000/verify-otp",
//         {
//           email,
//           otp,
//         }
//       );

//       alert(res.data.message);
//     } catch (error) {
//       console.log(error);
//       alert("Invalid OTP");
//     }
//   };
//     return(
//     <div>
//       <h2>Email OTP Verification</h2>

//       <input
//         type="email"
//         placeholder="Enter email"
//         value={email}
//         onChange={(e) =>
//           setEmail(e.target.value)
//         }
//       />

//       <button onClick={sendOtp}>
//         Send OTP
//       </button>

//       <br />
//       <br />

//       <input
//         type="text"
//         placeholder="Enter OTP"
//         value={otp}
//         onChange={(e) =>
//           setOtp(e.target.value)
//         }
//       />

//       <button onClick={verifyOtp}>
//         Verify OTP
//       </button>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Mail, User, ShieldCheck, Lock } from "lucide-react";

// export default function EmailSignup({setUser}) {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   // const [password, setPassword] = useState("");

//   const [loading, setLoading] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);

//   // Send OTP
//   const sendOtp = async () => {
//     if (!username || !email) {
//       alert("Please fill all fields");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await axios.post(
//         "http://localhost:3000/send-otp",
//         {
//           username,
//           email,
//         }
//       );

//       alert(res.data.message);
//       setOtpSent(true);
//     } catch (error) {
//       console.log(error);
//       alert("Failed to send OTP");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Verify OTP
//   const verifyOtp = async () => {
//     if (!otp) {
//       alert("Please enter OTP");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await axios.post(
//         "http://localhost:3000/verify-otp",
//         {
//           username,
//           email,
//           otp,
//         },
// {
// withCredentials: true,
// }
//       );
//       let role = res.data.user.role;
//       alert(res.data.message);
//       localStorage.setItem("role", role);
//       // console.log(localStorage.setItem("role", role))
//       setUser(role);
//       if(role === "admin"){
//         navigate("/AddBusDetails");
//         // localStorage.clear();
//       }  
//       else{
//         navigate("/");
//         // localStorage.clear();
//       }
//       // Clear form after success
//       setUsername("");
//       setEmail("");
//       // setPassword("");
//       setOtp("");
//       setOtpSent(false);
//     } catch (error) {
//       console.log(error);
//       alert("Invalid OTP");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br  px-4">
//       <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
//         {/* Header */}
//         <div className="text-center">
//           <div className="w-20 h-20 mx-auto rounded-full bg-indigo-100 flex items-center justify-center">
//             <ShieldCheck size={40} className="text-indigo-600" />
//           </div>

//           <h3 className="text-3xl font-bold text-gray-800 mt-4">
//             Login to NamahaBus
//           </h3>

//           <p className="text-gray-500 mt-2">
//             {/* Sign up using Email OTP Verification */}
//             Enter UserName and Email to continue
//           </p>
//         </div>

//         {/* Username */}
//         <div className="mt-8">
//           <label className="block text-gray-700 font-medium mb-2">
//             Username
//           </label>

//           <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500">
//             <User className="text-gray-400 mr-3" size={20} />

//             <input
//               type="text"
//               placeholder="Enter username"
//               className="w-full outline-none"
//               value={username}
//               onChange={(e) =>
//                 setUsername(e.target.value)
//               }
//             />
//           </div>
//         </div>

//         {/* Email */}
//         <div className="mt-4">
//           <label className="block text-gray-700 font-medium mb-2">
//             Email Address
//           </label>

//           <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500">
//             <Mail className="text-gray-400 mr-3" size={20} />

//             <input
//               type="email"
//               placeholder="Enter email"
//               className="w-full outline-none"
//               value={email}
//               onChange={(e) =>
//                 setEmail(e.target.value)
//               }
//             />
//           </div>
//         </div>

//         {/* Send OTP Button */}
//         {!otpSent && (
//           <button
//             onClick={sendOtp}
//             disabled={loading}
//             className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition duration-300"
//           >
//             {loading ? "Sending OTP..." : "Send OTP"}
//           </button>
//         )}

//         {/* OTP Verification Section */}
//         {otpSent && (
//           <div className="mt-6">
//             <label className="block text-gray-700 font-medium mb-2">
//               Enter OTP
//             </label>

//             <input
//               type="text"
//               placeholder="Enter 6-digit OTP"
//               className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
//               value={otp}
//               onChange={(e) =>
//                 setOtp(e.target.value)
//               }
//             />

//             <button
//               onClick={verifyOtp}
//               disabled={loading}
//               className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition duration-300"
//             >
//               {loading
//                 ? "Verifying..."
//                 : "Verify OTP & Register"}
//             </button>
//           </div>
//         )}

//         <div className="mt-6 text-center text-sm text-gray-500">
//           Secure OTP-based authentication
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Mail, User, ShieldCheck } from "lucide-react";
import "./Emailsignup.css";

export default function EmailSignup({ setUser }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  // Send OTP
  const sendOtp = async () => {
    if (!username || !email) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:3000/send-otp",
        {
          username,
          email,
        }
      );

      alert(res.data.message);
      setOtpSent(true);
    } catch (error) {
      console.log(error);
      alert("Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP
  const verifyOtp = async () => {
    if (!otp) {
      alert("Please enter OTP");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:3000/verify-otp",
        {
          username,
          email,
          otp,
        },
        {
          withCredentials: true,
        }
      );

      let role = res.data.user.role;

      alert(res.data.message);

      localStorage.setItem("role", role);

      setUser(role);

      if (role === "admin") {
        navigate("/AddBusDetails");
      } else {
        navigate("/");
      }

      setUsername("");
      setEmail("");
      setOtp("");
      setOtpSent(false);
    } catch (error) {
      console.log(error);
      alert("Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">

        <div className="signup-header">

          <div className="signup-icon">
            <ShieldCheck size={40} />
          </div>

          <h2>Login to NamahaBus</h2>

          <p>Enter Username and Email to continue</p>

        </div>

        <div className="signup-input-group">

          <label>Username</label>

          <div className="input-box">
            <User size={20} />
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

        </div>

        <div className="signup-input-group">

          <label className="emailStyle">Email Address</label>

          <div className="input-box">
            <Mail size={20} />
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

        </div>

        {!otpSent && (
          <button
            className="btn btn-primary"
            onClick={sendOtp}
            disabled={loading}
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>
        )}

        {otpSent && (
          <>
            <div className="signup-input-group">

              <label>Enter OTP</label>

              <div className="input-box">
                <input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>

            </div>

            <button
              className="btn btn-success"
              onClick={verifyOtp}
              disabled={loading}
            >
              {loading
                ? "Verifying..."
                : "Verify OTP & Register"}
            </button>
          </>
        )}

        <p className="signup-footer">
          Secure OTP-based authentication
        </p>

      </div>
    </div>
  );
}
