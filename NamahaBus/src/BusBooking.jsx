import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFilter, FaTimes } from "react-icons/fa";
import {useLocation} from "react-router-dom";
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CheckIcon from '@mui/icons-material/Check';
import "./BusBooking.css";
import CloseIcon from '@mui/icons-material/Close'
import api from "./api";
import {
  FaBus,
  FaSnowflake,
  FaBed,
  FaWifi,
  FaStar,
} from "react-icons/fa";
import { Trash2, Pencil } from "lucide-react";
import {
  FaMapMarkerAlt,
  FaChair,
  FaUser,
  FaImage,
} from "react-icons/fa";
function BusBooking() {
    const [buses, setBuses] = useState([]);
    const [sortBy, setSortBy] = useState("");
    const role = localStorage.getItem("role");
    const isOwner = role === "admin";
    const [showFilters, setShowFilters] = useState(false);
    const [error, setError] = useState("");
    const [filter,setFilter] = useState({  busType: "", maxPrice:10000, departureTime:""});
      const [open, setOpen] = useState(true);
      const navigate = useNavigate(); 
      const location = useLocation();
       const {from,to,date} = location.state; 
       console.log(location.state);
      useEffect(() => {
        // axios.get("http://localhost:3000/BusDetails"
        api.get("/BusDetails"
          ,{params:{from,to,date}})
          .then((res) => {
            setBuses(res.data.busesDetails);
          })
          .catch((err)=>{
            console.log(err);
              setError(
        err.response?.data?.message || "No buses available"
      );
          })
    }, []);
        if (error) {
  return (
    // <Alert severity="error">
    //   {error}
    // </Alert>
     <Collapse in={open}>
                    <Alert
                      action={
                        <IconButton
                          aria-label="close"
                          color="inherit"
                          size="small"
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          <CloseIcon fontSize="inherit" />
                        </IconButton>
                      }
                      sx={{ mb: 2,mt:4,width:"100%",}}
                    >
                      <h2>{error}</h2>
                    </Alert>
                  </Collapse>
  );
}
console.log(buses);
// const handleBusType = (type)=>
  // {
//     setFilter({...filter,busType:type});
// }
const handleBusType = (type) => {
  setFilter((prev) => ({
    ...prev,
    busType: prev.busType === type ? "" : type,
  }));
};

const handleTimeFilter = (time) => {
   console.log("Clicked:", time);
  setFilter((prev) => ({
    ...prev,
    departureTime:
      prev.departureTime === time ? "" : time,
  }));
};

const clearFilter = () => {
  setFilter({
    busType: "",
    maxPrice: 10000,
    departureTime: "",
    
  });
    // Clear sorting
  setSortBy("");
};

const filteredBuses = [...buses]
  .filter((bus) => {
    // Bus Type Filter
    const busTypeMatch =
      !filter.busType ||
      bus.type?.toLowerCase().includes(filter.busType.toLowerCase());

    // Price Filter
    const priceMatch =
      Number(bus.price || 0) <= filter.maxPrice;

    // Time Filter
    let timeMatch = true;
    let hour = null;

    if (bus.departure) {
      if (bus.departure.includes("T")) {
        hour = new Date(bus.departure).getHours();
      } else if (
        bus.departure.toUpperCase().includes("AM") ||
        bus.departure.toUpperCase().includes("PM")
      ) {
        const [time, period] = bus.departure.split(" ");

        let [h] = time.split(":");
        hour = parseInt(h);

        if (period.toUpperCase() === "PM" && hour !== 12) hour += 12;
        if (period.toUpperCase() === "AM" && hour === 12) hour = 0;
      } else {
        hour = parseInt(bus.departure.split(":")[0]);
      }

      switch (filter.departureTime) {
        case "before10":
          timeMatch = hour < 10;
          break;

        case "10to5":
          timeMatch = hour >= 10 && hour < 17;
          break;

        case "5to11":
          timeMatch = hour >= 17 && hour < 23;
          break;

        case "after11":
          timeMatch = hour >= 23 || hour < 5;
          break;

        default:
          timeMatch = true;
      }
    }

    return busTypeMatch && priceMatch && timeMatch;
  })
  .sort((a, b) => {
    switch (sortBy) {
      case "price":
        return Number(a.price) - Number(b.price);

      case "seats":
        return Number(b.seatsLeft) - Number(a.seatsLeft);

      case "ratings":
        return Number(b.rating || 0) - Number(a.rating || 0);

      case "arrival":
        return new Date(a.arrival) - new Date(b.arrival);

      case "departure":
        return new Date(a.departure) - new Date(b.departure);

      default:
        return 0;
    }
  });

    const handleSort = (type) => {
  setSortBy((prev) => (prev === type ? "" : type));
};
    return (
    <div className="booking-layout">
      {/* LEFT FILTER SECTION */}
        <div
    className={`booking-overlay ${
      showFilters ? "booking-overlay-show" : ""
    }`}
    onClick={() => setShowFilters(false)}
  />
        <div className={`booking-sidebar-wrapper ${
    showFilters ? "booking-sidebar-open" : ""
  }`}>
      <div className="booking-sidebar">
        <div className="booking-filter-header">
          <h3>Filters</h3>
           <div className="booking-filter-actions">

      <span
    style={{ cursor: "pointer" }}
    onClick={clearFilter}
  >
    Clear All
  </span>

          <button onClick={() => setShowFilters(false)}>
        <FaTimes />
      </button>
  
        </div>
</div>
        <hr />
        <h4>Bus Type</h4>

        <div className="booking-bus-types">
          {/* <div className="type-card" onClick={()=>handleBusType("AC")}> */}
          <div
  className={`booking-type-card ${
    filter.busType === "AC" ? "booking-active-card" : ""
  }`}
  onClick={() => handleBusType("AC")}
>
            <FaSnowflake />
            <p>AC</p>
          </div>

          {/* <div className="type-card" onClick={()=>handleBusType("Sleeper")}> */}
          <div
  className={`booking-type-card ${
    filter.busType === "Sleeper" ? "booking-active-card" : ""
  }`}
  onClick={() => handleBusType("Sleeper")}
>
            <FaBed />
            <p>Sleeper</p>
          </div>

          {/* <div className="type-card" onClick={()=>handleBusType("wifi")}> */}
          <div
  className={`booking-type-card ${
    filter.busType === "Wifi" ? "booking-active-card" : ""
  }`}
  onClick={() => handleBusType("Wifi")}
>           
            <FaWifi />
            <p>WiFi</p>
          </div>

          {/* <div className="type-card" onClick={()=>handleBusType("seater")}> */}
          <div
  className={`booking-type-card ${
    filter.busType === "Seater" ? "booking-active-card" : ""
  }`}
  onClick={() => handleBusType("Seater")}
>
            <FaBus />
            <p>Seater</p>
          </div>
        </div>

        <h4>Price Range</h4>

        {/* <input type="range" min="300" max="10000" value={filter.maxPrice} onClick={(e)=>setFilter({...filter,maxPrice:Number(e.target.value),})}/> */}
        <input type="range"
  min="300"
  max="10000" className="range"
  value={filter.maxPrice}
  onChange={(e) =>
    setFilter({
      ...filter,
      maxPrice: Number(e.target.value),
    })
  }
/>
        <div className="booking-price-range">
          <span>₹300</span>
          <span>₹{filter.maxPrice}</span>
        </div>

        <h4>Departure Time</h4>
   
        <div className="booking-time-grid">
          <button className={filter.departureTime === "before10"? "booking-active-time": "" }onClick={() => handleTimeFilter("before10")}>Before 10 AM</button>
          <button className={filter.departureTime === "10to5"? "booking-active-time"   : ""}onClick={() => handleTimeFilter("10to5")}>10 AM - 5 PM</button>
          <button
  className={
    filter.departureTime === "5to11"
      ? "booking-active-time"
      : ""
  }
  onClick={() => handleTimeFilter("5to11")}
>
  5 PM - 11 PM
</button>
         <button
  className={
    filter.departureTime === "after11"
      ? "booking-active-time"
      : ""
  }
  onClick={() => handleTimeFilter("after11")}
>
  After 11 PM
</button>
        </div>
        </div>
      </div>

      {/* RIGHT CONTENT */}

      <div className="booking-content">

        <div className="booking-mobile-filter">
  <button
    className="booking-filter-btn"
    onClick={() => setShowFilters(true)}
  >
    <FaFilter />
    <span>Filters</span>
  </button>
</div>
 
        {/* SORT SECTION */}

        <div className="booking-sort-box">
          <h3>Sort by</h3>

<div className="booking-sort-options">
  <span
    className={sortBy === "price" ? "booking-active-sort" : ""}
     onClick={() => handleSort("price")}
  >
    Price ↓
  </span>

  <span
    className={sortBy === "seats" ? "booking-active-sort" : ""}
     onClick={() => handleSort("seats")}
  >
    Seats ↑
  </span>

  <span
    className={sortBy === "ratings" ? "booking-active-sort" : ""}
   onClick={() => handleSort("ratings")}
  >
    Ratings ↑
  </span>

  <span
    className={sortBy === "arrival" ? "booking-active-sort" : ""}
    onClick={() => handleSort("arrival")}
  >
    Arrival Time ↑
  </span>

  <span
    className={sortBy === "departure" ? "booking-active-sort" : ""}
   onClick={() => handleSort("departure")}
  >
    Departure Time ↑
  </span>
</div>
     
        </div>
{/* <div
  className={`booking-overlay ${
    showFilters ? "booking-overlay-show" : ""
  }`}
  onClick={() => setShowFilters(false)}
></div> */}
        {/* BUS CARDS */}
         <div className="booking-bus-list">
      {
      // busesDetails.map((bus) => (
            filteredBuses.map((bus) => (
          <div className="booking-card" key={bus.id}>

            {/* LEFT */}

            <div className="booking-left">
              <div className="booking-heading">
               <h1>
                Service No - {bus.serviceNo}
              </h1>
                <h1 className="bookingbus-type">
                {bus.type}
              </h1>
               </div> 
              <div className="booking-icons">

                {/* <div className="icon-box">
                  <FaMapMarkerAlt />
                </div> */}
                <div
  className="booking-icon"
  title="View Route"
  onClick={() =>
    window.open(
      `https://www.google.com/maps/dir/${encodeURIComponent(
        bus.from
      )}/${encodeURIComponent(bus.to)}`,
      "_blank"
    )
  }
>
  <FaMapMarkerAlt />
</div>
                <div className="booking-icon">
                  <FaChair />
                </div>

                <div className="booking-icon">
                  <FaUser />
                </div>

                <div className="booking-photos">
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

      
            <div className="booking-center">
  <div className="booking-time">
  <h2>{bus.departure}</h2>
    <p>{bus.from}</p>
  </div>

  <div className="booking-duration">

    <div className="booking-line"></div>

    <span>{bus.duration}</span>

    <div className="booking-line"></div>
  </div>

  <div className="booking-time">
{/* <p className="hero">{bus.journeyDate}</p> */}
    <h2>{bus.arrival}</h2>
    <p>{bus.to}</p>
  </div>

</div>

            {/* RIGHT */}

            <div className="booking-right">

              <div className="booking-price-box">
                <p className="booking-date">{bus.journeyDate}</p>
                <h2>₹{bus.price}</h2>
              </div>
            <button onClick={() => navigate("/seatSelction",{
                state:{bus}
              })}> Select Seats
              </button><p className="booking-seat-left">
                {bus.seatsLeft} Seats Left
              </p>
           </div>
          </div>
        ))
      }
     </div>
       </div>
    </div>
  );
}

export default BusBooking;
