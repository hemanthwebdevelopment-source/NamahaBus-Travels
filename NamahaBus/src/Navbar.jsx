// import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Signup from "./Users/Signup.jsx";
import "./Navbar.css";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import api from "./api";
import Login from "./Users/Login.jsx";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight, 
  faBus,faBars,faListUl,
  faLocationDot,
  faCalendarDays,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Navbar({ user, setUser }) {
  const navigate = useNavigate();
  // const [user, setUser] = useState(localStorage.getItem("email"));
  console.log(user);

const logout = async (e) => {
  e.preventDefault();
  localStorage.removeItem("email");
  // (null);

  // await axios.post(
  //   "http://localhost:3000/logout",
 await api.post("/logout",
    {},
    // { withCredentials: true }
  ) .then((res) => {
     console.log(res.data);
      window.location.reload();
   })

};

    //   let logout=async(event)=>{
  //   event.preventDefault();
  //       localStorage.clear();
  // axios.post(
  //   "http://localhost:3000/logout",
  //   {},
  //   {
  //     withCredentials: true,
  //   }
  // )
  // .then((res) => {
  //   console.log(res.data);
  // })
  // .catch((err) => {
  //   console.log(err);
  // });

  //   }
  // return (
    // <div className="navbar">
    //     <div>
    //    <ul className="nav-links">
    //         <li><a>Namaha Bus</a></li>
    //         {/* FontAwesomeIcon icon={faAngleRight} */}
    //     <li><FontAwesomeIcon icon={faBus}beat />
    //       <a href='/'>Namaha Bus</a></li>
    //     </ul>
    //     </div>
    //     <div> 
    //   <ul className="nav-links">   
    //         <li><FontAwesomeIcon icon={faListUl} /><button onClick={() => user==="admin" ? navigate("/OwnerBookings"):navigate("/MyTickets")}>Bookings</button></li>
    //          {user === null ? (
    //         <li>
    //           <FontAwesomeIcon icon={faUser} />
    //           <button onClick={() => navigate("/Emailsignup")}>
    //             SignUp/Login
    //           </button>
    //         </li>
    //       ) : (
    //         <li>
    //           <button onClick={logout}>Logout</button>
    //         </li>
    //       )}
            {/* if(user=== null){
        <li><FontAwesomeIcon icon={faUser} />
         {/* <button onClick={()=>navigate("/Signup")}> */}
        {/* SignUp */}
      {/* </button> */}
      {/* <button onClick={()=>navigate("/Login")}>Login</button> */}
      {/* <button onClick={()=>navigate("/PhoneSignup")}>PhoneSignup</button> */}
      {/* <button onClick={()=>navigate("/Emailsignup")}>SignUp/Login</button>
      </li> */}
{/* } */}
      {/* if(user !== null){
        <li>
        <button>Logout</button>
      </li> */}
{/* } */}
//       </ul>
//         </div> 
//     </div>
      return (
  <nav className="navbar navbar-expand-lg shadow-sm">
    {/* <div className="container"> */}

      {/* Logo */}
      <a
        className="navbar-brand "
        href="/"
      >
        <FontAwesomeIcon
          icon={faBus}
          className="me-2 text-warning fs-3"
        />

        <span className="logo-dark">Namaha</span>
        <span className="logo-yellow ms-1">Bus</span>
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
        // aria-expanded="false"
        // aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse"
        id="navbar"
      >
        {/* Center Menu */}
        <ul className="navbar-nav mx-auto">

          {/* <li className="nav-item"> */}
            {/* <a className="nav-link active" href="/">
              Home
            </a> */}
            {/* <Link className="nav-link" to="/"> */}
    {/* Home */}
{/* </Link> */}
          {/* </li> */}

          {/* <li className="nav-item">
            <a className="nav-link" href="/offers">
              Offers
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/routes">
              Routes
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li> */}

        </ul>

      {/* <div> 
       <ul className="nav-links">   
             <li><FontAwesomeIcon icon={faListUl} /><button onClick={() => user==="admin" ? navigate("/OwnerBookings"):navigate("/MyTickets")}>Bookings</button></li>
           {user === null ? (
            <li>
              <FontAwesomeIcon icon={faUser} />
              <button onClick={() => navigate("/Emailsignup")}>
                SignUp/Login
              </button>
            </li>
          ) : (
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          )}
          </ul>
         </div> */}
        {/* Right Side */}

        <div className="nav-buttons d-flex align-items-center gap-3">

          <button
            className="booking-btn"
            onClick={() =>
              user === "admin"
                ? navigate("/OwnerBookings")
                : navigate("/MyTickets")
            }
          >
            <FontAwesomeIcon icon={faListUl} />
            &nbsp; My Bookings
          </button>

          {user == null ? (
            <button
              className="booking-btn"
              onClick={() => navigate("/Emailsignup")}
            >
              Login
            </button>
          ) : (
            <button
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>
          )}

        </div>
        
      </div>
      
    {/* </div> */}
    
  </nav>
);  
  // )
}

// import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
// import React from "react";
// import Signup from "./Users/Signup.jsx";
// import "./Navbar.css";
// import {useNavigate } from "react-router-dom";
// // import Login from "./Users/Login.jsx";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faAngleRight,
//   faBus,
//   faBars,
//   faListUl,
//   faLocationDot,
//   faCalendarDays,
//   faUser
// } from "@fortawesome/free-solid-svg-icons";
// // import { useNavigate } from "react-router-dom";
// export default function Navbar() {
//   const navigate = useNavigate();
//   return (
//      // <FontAwesomeIcon icon={faUser} />
//         <div className="navbar">
//         <div>
//         <ul className="nav-links">
//           <li><a>Namaha Bus</a></li>
//           <li>
//             <FontAwesomeIcon icon={faBus} beat />
//             <a>Namaha Bus</a>
//           </li>
//         </ul>
//       </div>
//       <div>
//         <ul className="nav-links">
//           <li>
//             <FontAwesomeIcon icon={faListUl} />
//             <a>Bookings</a>
//           </li>
//          <li>
//             <FontAwesomeIcon icon={faUser} />
//       <button onClick={(
//       ) => navigate("/SignUp")}>
//        Signup</button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }