import axios from "axios";
import './App.css'
// import Navbar from './Navbar'
import Image from './Image'
import Home from "./Home"
import Search from './Search'
import { Routes, Route } from "react-router-dom";
// import Signup from "./Users/Signup";
import Login from "./Users/Login";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import BusBooking from "./BusBooking";
import BusDetails from "./BusDetails";
import SeatSelection from "./SeatSelection";
import BookingPage from "./BookingPage";
import PhoneSignup from "./PhoneSignup";
import Emailsignup from "./Emailsignup";
import AddBus from "./BusInfo";
import AddBusDetails from "./AddBusDetails"
import Layout from "./Layout"
import NotFound from "./NotFound"
import OwnerRoute from "./Owner";
import OwnerBusInfo from "./OwnerBusInfo"
import UpdateBusInfo from "./UpdateBusInfo"
import UpdateBusDetails from "./UpdateBusDetails";
import MyTickets from "./MyTickets";
import OwnerBookings from "./OwnerBookings";
// import Logout from "./Logout"
// import BusBooking from "./BusBooking";
function App() {
//   VITE_API_URL="http://localhost:3000"
//  axios.create({
//   baseURL: import.meta.env.VITE_API_URL
// })
 useEffect(() => {
    axios
      .get("http://localhost:3000")
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err)
  );
  }, []);
   const [user, setUser] = useState(localStorage.getItem("role"));
   useEffect(() => {
  axios
    .get("http://localhost:3000/check-auth", {
      withCredentials: true,
    })
    .then((res) => {
      console.log("Logged in");
    })
    .catch(() => {
      localStorage.removeItem("role");
      setUser(null);
    });
}, []);
    return (
    <>
    {/* <PhoneSignup /> */}
    {/* <BookingPage/> */}
    {/* <Searchlist/> */}
    {/* <Navbar /> */}
   
    <Routes>
   <Route path="/OwnerBookings" element={<OwnerBookings/>}></Route>
     <Route element={<Layout user={user} setUser={setUser}/>}>
         <Route path="/seatSelction" element={<SeatSelection/>}></Route>
     <Route path="/" element={<Home />}></Route>
   {/* <Route path="/signup" element={<Signup/>}></Route> */}
   <Route path="/login" element={<Login/>}></Route>
   <Route path="/searchlist" element={<BusBooking/>}></Route>
   <Route path="/BusDetails" element={<BusDetails setUser={setUser}/>}></Route>

   <Route path="/BookingPage" element={<BookingPage/>}></Route>
   <Route path="/PhoneSignUp" element={<PhoneSignup/>}></Route>
   <Route path="/Emailsignup" element={<Emailsignup setUser={setUser}/>}></Route>
   <Route path="/AddBus" element={<OwnerRoute><AddBus /></OwnerRoute>}/>
   {/* <Route path="/AddBus" element={<AddBus/>}></Route>  */}
   <Route path="/AddBusDetails" element={<AddBusDetails/>}></Route>
   <Route path="/OwnerBusInfo" element={<OwnerBusInfo/>}></Route>
   <Route path="/UpdateBusInfo" element={<UpdateBusInfo/>}></Route>
   <Route path="/UpdateBusDetails" element={<UpdateBusDetails/>}></Route>
   <Route path="/MyTickets" element={<MyTickets/>}></Route>

   {/* <Route path="/logout" element={<Logout/>}></Route> */}
   </Route>
     <Route path="*" element={<NotFound />} />
   </Routes>
    </>
  ) 
}
export default App

