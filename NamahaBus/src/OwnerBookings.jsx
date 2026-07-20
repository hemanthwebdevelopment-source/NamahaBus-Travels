import React, { useEffect, useState } from "react";
import api from "./api";

function OwnerBookings() {
  const [tickets, setTickets] = useState([]);

  const [summary, setSummary] = useState({
    totalTickets: 0,
    totalRevenue: 0,
  });

  const [serviceNo, setServiceNo] = useState("");
  const [journeyDate, setJourneyDate] = useState("");

  const searchTickets = async () => {
    try {
      // const res = await axios.post(
      //   "http://localhost:3000/owner/tickets",
      const res = await api.post("/owner/tickets",
        {
          serviceNo,
          journeyDate,
        }
      );

      setTickets(res.data.tickets);

      setSummary({
        totalTickets: res.data.totalTickets,
        totalRevenue: res.data.totalRevenue,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    searchTickets();
  }, []);

  return (
 <div className="containerfluid py-4">

  <h1 className="text-center fw-bold mb-4">
    Bus Ticket Report
  </h1>

  {/* Search */}

  <div className="card shadow-sm mb-4">

    <div className="card-body">

      <div className="row g-3">

        <div className="col-md-4">

          <input
            type="text"
            className="form-control"
            placeholder="Service Number"
            value={serviceNo}
            onChange={(e) => setServiceNo(e.target.value)}
          />

        </div>

        <div className="col-md-4">

          <input
            type="date"
            className="form-control"
            value={journeyDate}
            onChange={(e) => setJourneyDate(e.target.value)}
          />

        </div>

        <div className="col-md-4">

          <button
            className="btn btn-primary "
            onClick={searchTickets}
          >
            🔍 Search
          </button>

        </div>

      </div>

    </div>

  </div>

  {/* Summary */}

  <div className="row mb-4 justify-content-between">

    <div className="col-md-3">

      <div className="card border-0 shadow">

        <div className=" text-center">

          <h6 className="text-muted mt-2">
            Total Tickets
          </h6>

          <h2 className="text-primary">
            {summary.totalTickets}
          </h2>

        </div>

      </div>

    </div>

    <div className="col-md-3">

      <div className="card border-0 shadow">

        <div className="card-body text-center">

          <h6 className="text-muted">
            Total Revenue
          </h6>

          <h2 className="text-success">
            ₹ {summary.totalRevenue}
          </h2>


        </div>

      </div>

    </div>

  </div>

  {/* Table */}

  <div className="card shadow">

    <div className="card-body">

      <div className="table-responsive">

        <table className="table table-hover align-middle">

          <thead className="table-white bold">

            <tr>

              <th>#</th>

              <th>User</th>

              <th>Tickets</th>

              <th>Seats</th>

              <th>Amount</th>

              <th>Status</th>

              <th>Journey Date</th>

            </tr>

          </thead>

          <tbody>

            {tickets.length > 0 ? (

              tickets.map((ticket, index) => (

                <tr key={ticket._id}>

                  <td>{index + 1}</td>

                  <td className="fw-semibold">
                    {ticket.userId?.username}
                  </td>

                  <td>
                    <span className="badge bg-primary">
                      {ticket.passengers.length}
                    </span>
                  </td>

                  <td>

                    {ticket.passengers
                      .map((p) => p.seat)
                      .join(", ")}

                  </td>

                  <td className="fw-bold text-success">
                    ₹{ticket.amount}
                  </td>

                  <td>

                    <span className="badge bg-success">
                      {ticket.paymentStatus}
                    </span>

                  </td>

                  <td>
                    {new Date(
                      ticket.busDetails.journeyDate
                    ).toLocaleDateString()}
                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="7"
                  className="text-center text-muted py-4"
                >
                  No Tickets Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>

  </div>

</div>
  );
}

export default OwnerBookings;