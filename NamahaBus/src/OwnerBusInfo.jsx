import { useLocation } from "react-router-dom";
import "./OwnerBusinfo.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"
import { Trash2, Pencil } from "lucide-react";
export default function OwnerBusInfo() {
  
  // const { state: bus } = useLocation();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [bus,setBus] = useState([]);
      useEffect(() => {
            axios.post("http://localhost:3000/ownerBusInfo")
              .then((res) => {
                console.log(res.data.businfo)
               setBus(res.data.businfo);
              })
              .catch((err)=>{
                console.log(err);
                  setError(
            err.response?.data?.message || "No buses available"
          )
        })
      },[])
        if (!bus) {
    return <h2>Loading...</h2>;
  }
  const deletebus =  async (e,id) => {
    e.preventDefault();
    try{
      const res = await axios.delete(
        `http://localhost:3000/delete/${id}`);
        alert(res.data);
       window.location.reload();
  } catch (err) {
    alert(err);
    }
  }
  // const updatebus = async(e,id)=>{
  //     e.preventDefault();
  //        try{
  //     const res = await axios.post(
  //       "http://localhost:3000/update",{id});
  //       alert(res.data);
  // } catch (err) {
  //   alert(err);
  //   }  
    //  }
      return (
  // <div className="details-container">
  //   {bus.map((b) => (
  //     <div className="details-card" key={b._id}>
  //       <h1>{b.companyName}</h1>

  //       <p><strong>Bus Name:</strong> {b.name}</p>
  //       <p><strong>From:</strong> {b.from}</p>
  //       <p><strong>To:</strong> {b.to}</p>
  //       <p><strong>Date:</strong> {b.date}</p>
  //       <p><strong>Departure:</strong> {b.departureTime}</p>
  //       <p><strong>Arrival:</strong> {b.arrivalTime}</p>
  //       <p><strong>Price:</strong> ₹{b.price}</p>
  //       <p><strong>Rating:</strong> ⭐ {b.rating}</p>
  //       <p><strong>Seats:</strong> {b.seats}</p>
  //     </div>
  //   ))}
  // </div>
  <div className="owner-container">
    {bus.map((b) => (
      <div className="operator-card" key={b._id}>
        <div className="operator-top">
          <div>
            <h2>{b.companyName}</h2>
            <p>
              {b.buses} Buses, {b.seats} Seats Available
            </p>
          </div>

          <div className="rating-box">
            ⭐ {b.rating}
          </div>

          <div className="price-box">
            <p>From</p>
            <h2>₹{b.price}</h2>

            <button onClick={()=>navigate("/BusDetails",{
                state:{from:b.from,to:b.to,date:b.date}
            })} className="view-btn viewbuses" >
              View Buses
            </button>
            {/* <button onClick={(e)=>deletebus(e,b._id)} className="view-btn">
              delete
            </button>
               <button onClick={()=>navigate("/UpdateBusInfo",{
                state:{b}
               })} className="view-btn">
              update
            </button>  */}
            <div className="flex gap-3">
  <button
    onClick={()=>navigate("/UpdateBusInfo",{
                state:{b}
               })}
    className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
  >
    <Pencil size={18} />
  </button>

  <button
    onClick={(e)=>deletebus(e,b._id)}
    className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
  >
    <Trash2 size={18} />
  </button>
</div>
          </div>
        </div>

        <div className="offer-box">
          50% off for Child Passengers
        </div>

        <div className="feature-row">
          <span>🚌 New Buses</span>
          <span>📷 Bus Photos</span>
          <span>📍 Live Tracking</span>
        </div>
      </div>
    ))}
  </div>
);
}