// import { useEffect, useState } from "react";
// import axios from "axios";
// import BusCard from "./BusCard";
// import "./Searchlist.css"
// export default function Searchlist() {

//   const [buses, setBuses] = useState([]);
   
//   useEffect(() => {
//     axios.get("http://localhost:3000/searchlist")
//       .then((res) => {
//         setBuses(res.data);
//       })
//       .catch((err)=>{
//         console.log(err);
//       })

//   }, []);

//   return (
//     <div class="backgroundimage">
//      <div class="container" >
//      <aside class="sidebar">
//      {/* <img src="adminlogo.png" class="Bharat" alt=""> */}
//      <h2>Admin Panel</h2>
//      <ul>
//      {/* <li onclick="showSection('users')">Manage Users</li> */}
//        <li><a href="course.html" class="a">Add courses</a></li>
//        <li><a href="timetable.html" class="a">Timetable</a></li>
//        <li ><a href="attendence.html" class="a" id="content-modify">Attendance & Marks</a></li>
//        <li ><a href="notification.html" class="a">Notifications</a></li>
//        <li ><a href="addevents.html" class="a" id="content-modify">Events & Placements</a></li>
//        <li ><a href="feedetails.html" class="a">Fees</a></li>
//        <li > <a href="reports.html" class="a">Reports</a></li>
//        <li > <a href="contentmodification.html" class="a" id="content-modify">Content Moderation</a> </li>
//        <li ><a href="payment.html" class="a">Fees Payment</a></li>
//      <li onclick="logout()" id="content-modify">Logout</li>
//     </ul>
//    </aside>
//    <span
//       style={{
//         display: "flex",
//         flexWrap: "wrap",
//         justifyContent: "center"
//       }}
//     >
//         {
//         buses.map((bus) => (
//        <BusCard key={bus._id} bus={bus} />
//         ))
//       }
//     </span>
//     </div>
//     </div>
//   );
// }

