import "./BusDetails.css";
import { useEffect, useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import api from "./api";
import {
  FaMapMarkerAlt,
  FaChair,
  FaUser,
  FaImage,
} from "react-icons/fa";
import { Trash2, Pencil } from "lucide-react";
export default function BusDetails() {
  let [busesDetails,setbusesDetails] = useState([]);
  // console.log(setUser);
  const navigate = useNavigate();
  const location = useLocation(); 
  const role = localStorage.getItem("role");
const isOwner = role === "admin";
//   const email = localStorage.getItem("email");
// const isOwner = email === "manoharsoftwaredeveloper@gmail.com";
      //  const {from,to,date} = location.state;
      //  console.log(location.state);
            useEffect(() => {
              // axios.get("http://localhost:3000/ownerBusInfo")
              api.get("/ownerBusInfo")
                .then((res) => {
                   console.log(res.data);
   setbusesDetails(res.data.businfo);
                })
                .catch((err)=>{
                  console.log(err);
              })
         }, []);

 const deletebus =  async (e,id) => {
    e.preventDefault();
    try{
      // const res = await axios.delete(
      //   `http://localhost:3000/BusDetails/${id}`);
      const res = await api.delete("/BusDetails/${id}");
        alert(res.data);
         window.location.reload();
  } catch (err) {
    alert(err);
    }
  }         
  // const buses = [
  
  //   {
  //     id: 2,
  //     serviceNo: 3692,
  //     type: "Night Rider AC Seater/Sleeper",
  //     departure: "23:30",
  //     arrival: "04:45",
  //     duration: "05h.15m",
  //     from: "Vijayawada",
  //     to: "Hyderabad",
  //     plate: "AP39-Z-0184",
  //     price: 528,
  //     seatsLeft: 7,
  //   },
  //   {
  //     id: 3,
  //     serviceNo: 4178,
  //     type: "VOLVO/SCANIA AC Multiaxle Semi Sleeper",
  //     departure: "23:40",
  //     arrival: "04:41",`
  //     duration: "05h.01m",
  //     from: "Vijayawada",
  //     to: "Hyderabad",
  //     plate: "AP04-Z-0166",
  //     price: 670,
  //     seatsLeft: 38,
  //   },
  // ];

  return (
    <div className="bus-container">
      {
      busesDetails.map((bus) => (

          <div className="bus-card" key={bus.id}>

            {/* LEFT */}

            <div className="left-section">

              <h2>
                Service Number - {bus.serviceNo}
              </h2>

              <p className="bus-type">
                {bus.type}
              </p>

              <div className="bottom-icons">

                <div className="icon-box">
                  <FaMapMarkerAlt />
                </div>

                <div className="icon-box">
                  <FaChair />
                </div>

                <div className="icon-box">
                  <FaUser />
                </div>

                <div className="photos">
                  <FaImage />
                  <span>Photos</span>
                </div>
                        {isOwner && (
                       <div className="flex gap-3">
  <button
    onClick={()=>navigate("/UpdateBusDetails",{
                state:{bus}
               })}
    className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
  >
    <Pencil size={18} />
  </button>

  <button
    onClick={(e)=>deletebus(e,bus._id)}
    className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
  >
    <Trash2 size={18} />
  </button>
</div>
)}
              {/* <div>
                 <button
    onClick={(e)=>deletebus(e,b._id)}
    className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
  >
    <Trash2 size={18} />
  </button>
              </div> */}

              </div>

            </div>

            {/* CENTER */}

            <div className="center-section">

              <div>
                <h2>{bus.departure}</h2>
                <p>{bus.from}</p>
              </div>

              <div className="duration-box">
                <div className="line"></div>

                <span>{bus.duration}</span>

                <div className="line"></div>
              </div>

              <div>
                <h2>{bus.arrival}</h2>
                <p>{bus.to}</p>
              </div>

            </div>

            {/* RIGHT */}

            <div className="right-section">

              <div className="price-box">
                {/* <p>From</p> */}
                <h2>₹{bus.price}</h2>
              </div>
            <button onClick={() => navigate("/seatSelction",{
                state:{bus}
              })}> Select Seats
              </button><p className="seat-left">
                {bus.seatsLeft} Seats Left
              </p>
           </div>
          </div>
        ))
      }
     </div>
  );
}

