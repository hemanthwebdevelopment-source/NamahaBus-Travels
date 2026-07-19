// import { useState } from "react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router-dom";
// import "./Search.css"
// export default function Search(){
//     const navigate  = useNavigate()
//     let [formData,setFormData]=useState({
//         from:"",
//         to:"",
//         date:"",
//     });
//     let handleInputChange =(event)=>{
//     setFormData((currData)=>{
//           return {...currData, [event.target.name]:event.target.value};
//     })
// }
// let handleSubmit=async(event)=>{
//     event.preventDefault();
//     console.log(formData);
//     // console.log(event.target.value);
//     try{
//        const options ={
//             method:"POST",
//             credentials:"include",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body:JSON.stringify(formData)
//         }
//         console.log("Hemanth is doing project");
//         const res = await fetch("http://localhost:3000/destination",options);
//         const data = await res.json();
//        console.log(data);
//         console.log(res.status);
//         if (res.status==200) {
//             navigate("/searchlist",{
//                 state:{from:from.value,to:to.value,date:date.value}
//             });
//         } else {
//                 console.log(data.message || "Failed");
//             }
//             // console.log(res.status);
//             // alert(data.message);
//             // console.log(data.message);
            
//             // <Link href="searchlist" underline="none"></Link>
//         }catch (err) {
//             console.log(err);
//             alert("Something went wrong");
//         }
// }   
//     return(
//           <div>
//             {/* <i class="icon___3958a0 icon icon-boarding_point"></i> */}
//             {/* <i class="fa-brands fa-arch-linux fa-bounce"></i> */}
//             <form className="input-box" onSubmit={handleSubmit}>
//                 <input type="text" placeholder="Leaving From" onChange={handleInputChange} id="from" name="from"></input>
//                 <input type="text" placeholder="Going To" onChange={handleInputChange} id="to" name="to" ></input>
//                 <input type="date" id="date" name="date" min={new Date().toISOString().split("T")[0]} onChange={handleInputChange}></input>
//                 {/* <i>Today</i>    
//                 <i>Tomorrow</i> */}
//                 <button type="submit">Search<FontAwesomeIcon icon={faAngleRight} /></button>
//             </form>
//         </div>
        
//     )
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarDays,
  faMagnifyingGlass,
  faRightLeft
} from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
  });

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const swapLocations = () => {
    setFormData((prev) => ({
      ...prev,
      from: prev.to,
      to: prev.from,
    }));
  };

  const setToday = () => {
    setFormData((prev) => ({
      ...prev,
      date: new Date().toISOString().split("T")[0],
    }));
  };

  const setTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    setFormData((prev) => ({
      ...prev,
      date: tomorrow.toISOString().split("T")[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      // const res = await fetch("http://localhost:3000/destination", {
      //   method: "GET",
      //   credentials: "include",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });

      // await res.json();

      const res = await axios.get("http://localhost:3000/destination",{
            params: {
        from,
        to,
        date,
    },
      })

      if (res.status === 200) {
        navigate("/searchlist", {
          state: formData,
        });
      } else {
        alert("No buses found.");
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <>
      <form className="search-card" onSubmit={handleSubmit}>
        {/* From */}

        <div className="search-item">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="search-icon"
          />

          <div className="input-area">
            <label>Leaving From</label>

            <input
              type="text"
              name="from"
              placeholder="Enter Source"
              value={formData.from}
              onChange={handleInputChange}
              autoComplete="off"
              required
            />
          </div>
        </div>

        {/* Swap */}

        <button
          type="button"
          className="swap-btn"
          onClick={swapLocations}
        >
          <FontAwesomeIcon icon={faRightLeft} />
        </button>

        {/* To */}

        <div className="search-item">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="search-icon"
          />

          <div className="input-area">
            <label>Going To</label>

            <input
              type="text"
              name="to"
              placeholder="Enter Destination"
              value={formData.to}
              onChange={handleInputChange}
              autoComplete="off"
              required
            />
          </div>
        </div>

        {/* Date */}

        <div className="search-item">
          <FontAwesomeIcon
            icon={faCalendarDays}
            className="search-icon"
          />

          <div className="input-area">
            <label>Journey Date</label>

            <input
              type="date"
              name="date"
              value={formData.date}
              min={new Date().toISOString().split("T")[0]}
              onChange={handleInputChange}
              required
            />

            <div className="quick-date">
              <span onClick={setToday}>Today</span>

              <span onClick={setTomorrow}>Tomorrow</span>
            </div>
          </div>
        </div>

        {/* Search */}

        <button
          type="submit"
          className="search-btn"
          disabled={loading}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />

          {loading ? " Searching..." : " Search Buses"}
        </button>
      </form>
    </>
  );
}