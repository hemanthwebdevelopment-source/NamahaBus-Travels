import React from "react";
import { useLocation,useNavigate } from "react-router-dom";
import api from "./api";
import { useEffect, useState } from "react";
import "./BookingPage.css";
import {
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Pencil,
  Armchair,
} from "lucide-react";

export default function BookingPage() {
        const navigate = useNavigate();
        const [email,setEmail] = useState("");
        const [phone,setPhone] = useState("");
       const [passengers, setPassengers] = useState([]);
       const handlePassenger = (index, field, value) => {
       const updatedPassengers = [...passengers];

  if (!updatedPassengers[index]) {
    updatedPassengers[index] = {};
  }

  updatedPassengers[index][field] = value;

  updatedPassengers[index].seat = seats[index].seat;

  setPassengers(updatedPassengers);
};
        const location = useLocation();
        console.log(location);
        const trip = location.state.bus;  
        console.log(trip);
        // const seats = location.state.newBookedSeats;
        const [seats, setseats] = useState(location.state.newBookedSeats);
        console.log(seats[0].seat);
        // const seat =seats[0].seat;
        const seat = seats.length > 0 ? seats[0].seat : null;
        console.log(seat);
        const totalprice = location.state.totalprice; 
          const amount = totalprice;
            const currency = "INR";
            const receiptId= "qwsaq1";
           const payment = async () => {
            // const response = await fetch("http://localhost:3000/payment",{method:"POST",body:JSON.stringify({amount,currency,receipt:receiptId,email,passengers,seat}),headers:{"content-Type":"application/json"},});
            const response = await api.post("/payment",{amount,currency,receipt:receiptId,email,passengers,seat})
          //  const order =await response.json();
          const order = await response.data;
           console.log(order);
           var options = {
    "key": "rzp_test_Su3ZKYE6AecTLI", // Enter the Key ID generated from the Dashboard
    amount:order.amount, // Amount is in currency subunits. 
    currency:order.currency,
    "name": "NamahaBus", //your business name
    "description": "Bus Ticket Booking",
    "image": "https://example.com/your_logo",
    "order_id": order.id, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": async function (response){
        try {
          // await axios.post(
          // "http://localhost:3000/SeatSelection",
          await api.post("/SeatSelection",
          {
            bookedSeats: seats,
            email,passengers,seat,trip,totalprice,
            razorpay_order_id:
              response.razorpay_order_id,

            razorpay_payment_id:
              response.razorpay_payment_id,

            razorpay_signature:
              response.razorpay_signature,
          } ,{ withCredentials: true }
        );
        alert("Payment Successful");
         navigate("/");
         } catch (err) {
          if(err.status===404){
            alert("you must login");
            navigate("/Emailsignup")
          }
          else{
            alert(err);

          }
      }
    },
    "prefill": { //We recommend   using the prefill parameter to auto-fill customer's contact information, especially their phone number
        "name": "Hemanth", //your customer's name
        "email": "hemanth@example.com", 
        "contact": "+919876543210"  //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new window.Razorpay(options);
rzp1.on('payment.failed', function (response){
        alert("payment failed");
        console.log(response.error);
        // navigate("./errorpage")
        // alert(response.error.code);
        // alert(response.error.description);
        // alert(response.error.source);
        // alert(response.error.step);
        // alert(response.error.reason);
        // alert(response.error.metadata.order_id);
        // alert(response.error.metadata.payment_id);
});
// document.getElementById('rzp-button1').onclick = function(e){
    rzp1.open();
    // preventDefault();
// }
    }


const isFormValid = () => {
  // Contact details
  if (!phone.trim() || !email.trim()) {
    return false;
  }

  // At least one seat
  if (seats.length === 0) {
    return false;
  }

  // Passenger details count
  if (passengers.length !== seats.length) {
    return false;
  }

  // Every passenger should have complete details
  return passengers.every((passenger) => {
    return (
      passenger &&
      passenger.name?.trim() &&
      passenger.age?.toString().trim() &&
      passenger.gender
    );
  });
};
useEffect(() => {
  const initialPassengers = seats.map((seat) => ({
    seat: seat.seat,
    name: "",
    age: "",
    gender: seat.gender, // Automatically set from previous page
  }));

  setPassengers(initialPassengers);
}, [seats]);

const deletePassenger = (index) => {
  if (seats.length === 1) {
    alert("At least one passenger is required.");
    return;
  }

  setseats((prev) => prev.filter((_, i) => i !== index));
  setPassengers((prev) => prev.filter((_, i) => i !== index));
};

return (
    <div className="bookingpage-wrapper"
      // style={{
      //   minHeight: "100vh",
      //   background: "#f3f4f6",
      //   padding: "30px",
      //   fontFamily: "sans-serif",
      // }}
    >
      <div className="bookingpage-container"
        // style={{
        //   maxWidth: "1200px",
        //   margin: "0 auto",
        //   display: "grid",
        //   gridTemplateColumns: "2fr 1fr",
        //   gap: "20px",
        // }}
      >
        {/* LEFT SECTION */}
        <div className="bookingpage-left"
          // style={{
          //   display: "flex",
          //   flexDirection: "column",
          //   gap: "20px",
          // }}
        >
          {/* TRIP DETAILS */}
          <div className="bookingpage-trip-card"
            // style={{
            //   background: "#fff",
            //   borderRadius: "18px",
            //   overflow: "hidden",
            //   boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            // }}
          >
            <div className="bookingpage-trip-body"
              // style={{
              //   padding: "18px 22px",
              // }}
            >
              <div className="bookingpage-section-header"
                // style={{
                //   display: "flex",
                //   alignItems: "center",
                //   gap: "10px",
                //   marginBottom: "20px",
                // }}
              >
                <CheckCircle color="green" size={22} />
                <h2 className="bookingpage-section-title"
                  // style={{
                  //   margin: 0,
                  //   fontSize: "22px",
                  // }}
                >
                  Trip Details
                </h2>
              </div>

              {/* ROUTE */}
              <div className="bookingpage-route"
                // style={{
                //   display: "flex",
                //   justifyContent: "space-between",
                //   alignItems: "center",
                // }}
              >
                {/* FROM */}
                <div className="bookingpage-route-from">
                  <h3 className="bookingpage-route-city"
                  // style={{ margin: 0 }}
                  >
                   {trip.from}
                  </h3>

                  <div className="bookingpage-route-time"
                    // style={{
                    //   marginTop: "6px",
                    //   color: "#555",
                    // }}
                  >
                  {/* {new Date(trip.startDate).toLocaleDateString("en-IN")} */}
   {              new Date(trip.startDate).toLocaleString("en-IN", {
  dateStyle: "medium",
  timeStyle: "short",
})}
                     {/* {trip.startDate} */}
                  </div>

                  {/* <div
                    style={{
                      fontWeight: "600",
                      marginTop: "4px",
                    }}
                  >
                    {trip.from}
                  </div> */}
                </div>

                {/* TIME */}
                {/* <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "50px",
                        background: "#ccc",
                        height: "2px",
                      }}
                    />

                    <div
                      style={{
                        border: "1px solid #ccc",
                        padding: "6px 14px",
                        borderRadius: "20px",
                        fontSize: "14px",
                        color: "#444",
                      }}
                    >
                      {trip.duration}
                    </div>

                    <div
                      style={{
                        width: "50px",
                        height: "2px",
                        background: "#ccc",
                      }}
                    />
                  </div>
                </div> */}

                 {/* TIME */}
<div className="bookingpage-route-center">
  <div className="bookingpage-duration-wrapper">

    <div className="bookingpage-duration-line"></div>

    <div className="bookingpage-duration-badge">
      {trip.duration}
    </div>

    <div className="bookingpage-duration-line"></div>

  </div>
</div>   


                {/* TO */}
                {/* <div style={{ textAlign: "right" }}>
                  <h3 style={{ margin: 0 }}>
                    {trip.to}
                  </h3>

                  <div
                    style={{
                      marginTop: "6px",
                      color: "#555",
                    }}
                  >
                      {              new Date(trip.endDate).toLocaleString("en-IN", {
  dateStyle: "medium",
  timeStyle: "short",
})}
                  </div>

                  
                </div>
              </div>
            </div> */}

            {/* BUS INFO */}
            {/* <div
              style={{
                background: "#d1fae5",
                padding: "18px 22px",
              }}
            >
              <div
                style={{
                  fontWeight: "700",
                  fontSize: "20px",
                  color: "#065f46",
                }}
              >
                 {trip.name}
              </div>

              <div
                style={{
                  marginTop: "4px",
                  color: "#065f46",
                }}
              >
                 {trip.type}
              </div>
            </div>
          </div> */}

          {/* CONTACT DETAILS */}
          {/* <div
            style={{
              background: "#fff",
              borderRadius: "18px",
              padding: "20px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "8px",
              }}
            >
              <CheckCircle color="#888" size={22} />

              <h2 style={{ margin: 0 }}>
                Contact Details
              </h2>
            </div>

            <div
              style={{
                color: "#666",
                marginBottom: "25px",
              }}
            >
              Your Ticket and Bus Info will be sent
              here.
            </div>

            <div className="bookingpage-contact-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            > */}
              {/* MOBILE */}
              {/* <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "12px",
                  }}
                >
                  <Phone size={20} />
                  <span>Mobile Number</span>
                </div>

                <input
                  type="text"
                  style={inputStyle}  value={phone}
        onChange={(e) =>
          setPhone(e.target.value)}
                />
              </div> */}

              {/* EMAIL */}
              {/* <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "12px",
                  }}
                >
                  <Mail size={20} />
                  <span>Email ID</span>
                </div>

                <input
                  type="email"
                  style={inputStyle} value={email}
        onChange={(e) =>
          setEmail(e.target.value)}
                />
              </div>
            </div>
            </div> */}

            {/* TO */}
<div className="bookingpage-route-to">
  <h3 className="bookingpage-route-city">
    {trip.to}
  </h3>

  <div className="bookingpage-route-time">
    {new Date(trip.endDate).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    })}
  </div>
</div>
</div>
</div>

{/* BUS INFO */}
<div className="bookingpage-bus-info">

  <div className="bookingpage-bus-name">
    {trip.name}
  </div>

  <div className="bookingpage-bus-type">
    {trip.type}
  </div>

</div>
</div>

{/* CONTACT DETAILS */}
<div className="bookingpage-contact-card">

  <div className="bookingpage-section-header">
    <CheckCircle color="#888" size={22} />

    <h2 className="bookingpage-section-title">
      Contact Details
    </h2>
  </div>

  <div className="bookingpage-section-description">
    Your Ticket and Bus Info will be sent here.
  </div>

  <div className="bookingpage-contact-grid">

    {/* MOBILE */}
    <div className="bookingpage-contact-item">

      <div className="bookingpage-contact-label">
        <Phone size={20} />
        <span>Mobile Number</span>
      </div>

      <input
        type="text"
        className="bookingpage-input"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

    </div>

    {/* EMAIL */}
    <div className="bookingpage-contact-item">

      <div className="bookingpage-contact-label">
        <Mail size={20} />
        <span>Email ID</span>
      </div>

      <input
        type="email"
        className="bookingpage-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

    </div>

  </div>

</div>


          {/* PASSENGER DETAILS */}
<div className="bookingpage-passenger-section">

  <div className="bookingpage-section-header">
    <CheckCircle color="#888" size={22} />

    <h2 className="bookingpage-section-title">
      Passenger Details
    </h2>
  </div>

  <div className="bookingpage-section-description">
    Fill passenger details corresponding to the seats
  </div>

  <div className="bookingpage-passenger-wrapper">

    {seats.map((seat, index) => (

      <div
        key={index}
        className="bookingpage-passenger-card"
      >

        <span
          className="bookingpage-remove-seat"
          onClick={() => deletePassenger(index)}
          onMouseEnter={(e) => {
            e.target.style.color = "#ef4444";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#6b7280";
          }}
        >
          ×
        </span>

        <div className="bookingpage-passenger-form">

          <div className="bookingpage-seat-badge">
            <Armchair size={18} />
            {seat.seat}
          </div>

          {/* NAME */}
          <input
            type="text"
            placeholder="Name"
            className="bookingpage-input"
            name="name"
            onChange={(e) =>
              handlePassenger(index, "name", e.target.value)
            }
          />

          {/* AGE */}
          <input
            type="text"
            placeholder="Age"
            className="bookingpage-input"
            name="age"
            onChange={(e) =>
              handlePassenger(index, "age", e.target.value)
            }
          />

          {/* GENDER */}
          <div className="bookingpage-gender-group">

            <button
              type="button"
              className="bookingpage-gender-btn"
              style={{
                background:
                  passengers[index]?.gender?.toLowerCase() === "male"
                    ? "#d1fae5"
                    : "#fff",
                color:
                  passengers[index]?.gender?.toLowerCase() === "male"
                    ? "#065f46"
                    : "#374151",
              }}
              onClick={() =>
                handlePassenger(index, "gender", "Male")
              }
            >
              Male
            </button>

            <button
              type="button"
              className="bookingpage-gender-btn"
              style={{
                background:
                  passengers[index]?.gender?.toLowerCase() === "female"
                    ? "#d1fae5"
                    : "#fff",
                color:
                  passengers[index]?.gender?.toLowerCase() === "female"
                    ? "#065f46"
                    : "#374151",
              }}
              onClick={() =>
                handlePassenger(index, "gender", "Female")
              }
            >
              Female
            </button>

          </div>

        </div>

      </div>

))}

</div>

</div>
{/* BILLING */}
<div className="bookingpage-billing-card">

  <div className="bookingpage-billing-content">

    <MapPin
      size={35}
      color="#444"
      className="bookingpage-billing-icon"
    />

    <div className="bookingpage-billing-details">

      <div className="bookingpage-billing-title">
        Billing Address
      </div>

      <div className="bookingpage-billing-subtitle">
        (For GST Tax invoice)
      </div>

      <div className="bookingpage-billing-address">
        Pandit Nehru Bus Station,
        Vijayawada 0866-2523926,
        Vijayawada
      </div>

    </div>

  </div>

  <div className="bookingpage-billing-edit">
    Edit <Pencil size={16} />
  </div>

</div>
</div>
          {/* RIGHT SIDE */}

<div className="bookingpage-right">

  <div className="bookingpage-fare-card">

    <h2 className="bookingpage-fare-title">
      Fare Details
    </h2>

    <div className="bookingpage-fare-row">
      <span>Total Fare (inclusive)</span>
      <span>{totalprice}</span>
    </div>

    <hr className="bookingpage-fare-divider" />

    <div className="bookingpage-fare-total">
      <span>Total Amount To Be Paid</span>
      <span>₹ {totalprice}</span>
    </div>

  </div>

  <div className="bookingpage-terms">
    By proceeding, I agree to the{" "}
    <span className="bookingpage-terms-link">
      T&amp;Cs
    </span>
  </div>

  <button
    disabled={!isFormValid()}
    className={`bookingpage-pay-btn ${
      !isFormValid() ? "bookingpage-pay-btn-disabled" : ""
    }`}
    onClick={payment}
  >
    Continue to Pay ₹ {totalprice} →
  </button>

</div>          

  </div>
    </div>
  );
}
