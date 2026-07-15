import { useEffect, useState } from "react";
import axios from "axios";
import {
  Bus,
  Calendar,
  MapPin,
  IndianRupee,
  User,
  CheckCircle,
  ClipboardList
} from "lucide-react";

export default function MyTickets() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/tickets",
        {
          withCredentials: true,
        }
      );

      setTickets(res.data.tickets);
      setIsOwner(res.data.isOwner);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        Loading Tickets...
      </h2>
    );
  }

  return (
    <div
      style={{
        background: "#f3f4f6",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#111827",
            display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
        }}
      >
          {/* <ClipboardList size={34} color="#059669" />
  {isOwner ? "All Bookings" : " 🎫 My Tickets"} */}
         {isOwner
    ? "📋 All Bookings"   : "🎫 My Tickets"}
      </h1>

      {tickets.length === 0 && (
        <h2
          style={{
            textAlign: "center",
            color: "#6b7280",
          }}
        >
          No Tickets Found
        </h2>
      )}

      {tickets.map((ticket) => (
        <div
          key={ticket._id}
          style={{
            maxWidth: "900px",
            margin: "20px auto",
            background: "#fff",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow:
              "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          {/* Header */}
          <div
            style={{
              background:
                "linear-gradient(135deg,#10b981,#059669)",
              color: "#fff",
              padding: "20px",
            }}
          >
            <h2
              style={{
                color:"#fff",
                margin: 0,
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <CheckCircle />
              Ticket Confirmed
            </h2>

            <p
              style={{
                marginTop: "10px",
              }}
            >
              Booking ID : {ticket._id}
            </p>
          </div>
            
          {/* Route */}
          <div
            style={{
              padding: "25px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <div>
              <h2>{ticket.busDetails.from}</h2>
              <p>Departure</p>
            </div>

            <div
              style={{
                flex: 1,
                textAlign: "center",
                fontSize: "22px",
              }}
            >
              🚌──────────────🚌
            </div>

            <div>
              <h2>{ticket.busDetails.to}</h2>
              <p>Arrival</p>
            </div>
          </div>

          {/* Bus Details */}
          <div
            style={{
              background: "#f9fafb",
              padding: "20px",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(180px,1fr))",
              gap: "15px",
            }}
          >
            <div>
              <Bus size={18} />
              <strong> Service No</strong>
              <p>{ticket.busDetails.serviceNo}</p>
            </div>

            <div>
              <Bus size={18} />
              <strong> Bus Type</strong>
              <p>{ticket.busDetails.type}</p>
            </div>

            <div>
              <Calendar size={18} />
              <strong> Journey Date</strong>
              <p>
                {new Date(
                  ticket.busDetails.journeyDate
                ).toLocaleDateString()}
              </p>
            </div>

            <div>
              <IndianRupee size={18} />
              <strong> Amount Paid</strong>
              <p>₹ {ticket.amount}</p>
            </div>
          </div>
          {/* Show only for Owner */}
       {isOwner && (
      <div
       style={{
        background: "#eff6ff",
        border: "1px solid #bfdbfe",
        margin: "20px",
        padding: "15px",
        borderRadius: "12px",
      }}
     >
      <h3 style={{ marginTop: 0 }}>
       👤 Booked By
      </h3>

      <p>
      <strong>Name:</strong>{" "}
      {ticket.userId?.username}
      </p>

      <p>
      <strong>Email:</strong>{" "}
      {ticket.userId?.email}
      </p>
      </div>
      )}
          {/* Passenger Details */}
          <div
            style={{
              padding: "20px",
            }}
          >
            <h3>Passengers</h3>

            {ticket.passengers?.map(
              (passenger, index) => (
                <div
                  key={index}
                  style={{
                    border:
                      "1px solid #e5e7eb",
                    borderRadius: "12px",
                    padding: "15px",
                    marginBottom: "12px",
                    display: "flex",
                    justifyContent:
                      "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <User size={18} />
                      <strong>
                        {passenger.name}
                      </strong>
                    </div>

                    <p>
                      {passenger.age} Years •{" "}
                      {passenger.gender}
                    </p>
                  </div>

                  <div
                    style={{
                      background: "#d1fae5",
                      color: "#065f46",
                      padding:
                        "10px 16px",
                      borderRadius:
                        "10px",
                      fontWeight: "600",
                    }}
                  >
                    Seat {passenger.seat}
                  </div>
                </div>
              )
            )}
          </div>

          {/* Footer */}
          <div
            style={{
              borderTop:
                "1px solid #e5e7eb",
              padding: "20px",
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                background: "#dcfce7",
                color: "#166534",
                padding:
                  "8px 15px",
                borderRadius:
                  "20px",
                fontWeight: "600",
              }}
            >
              Confirmed ✅
            </span>

            <button
              style={{
                background: "#10b981",
                color: "#fff",
                border: "none",
                padding:
                  "12px 20px",
                borderRadius:
                  "10px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Download Ticket
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}