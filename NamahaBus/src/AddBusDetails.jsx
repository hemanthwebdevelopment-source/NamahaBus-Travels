import React, { useState } from "react";
import axios from "axios";
import { useNavigate,useLocation } from "react-router-dom";
import {
  Bus,
  MapPin,
  Calendar,
  Clock,
  Building2,
  IndianRupee,
  Armchair,
  Hash,
} from "lucide-react";
import "./AddBusDetails.css"


export default function AddBusDetails() {
  const navgiate = useNavigate();
  const location = useLocation();
  // const bus = location.state.bus.bus;
  // console.log(bus._id);
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
  const [formData, setFormData] = useState({
    serviceNo: "",
    type: "",
    departure: "",
    arrival: "",
    duration: "",
    from: "",
    to: "",
    plate: "",
    price: "",
    seatsLeft: "",
    startDate: "",
    endDate: "",
    name: "",
    companyName: "",
    scheduleType: "Daily",
    operatingDays: [],
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/AddBusDetails", {
    // busId: bus._id,
    ...formData,
  }
      );

      console.log(res.data);
      alert("Bus Details Added Successfully 🚍");

      setFormData({
        serviceNo: "",
        type: "",
        departure: "",
        arrival: "",
        duration: "",
        from: "",
        to: "",
        plate: "",
        price: "",
        seatsLeft: "",
        startDate: "",
        endDate: "",
        name: "",
        companyName: "",
        scheduleType: "Daily",
        operatingDays: [],
      });
    } catch (err) {
      console.log(err);
      alert("Failed to add bus");
    }
  };
  return (
   
   <div className="addbus-page">
  <div className="addbus-container">

    {/* Header */}
    <div className="addbus-header">
      <div className="header-content">

        <div className="header-icon">
          <Bus size={40} className="header-bus-icon" />
        </div>

        <div>
          <h1 className="header-title">Add Bus Services</h1>
          <p className="header-subtitle">
            Create a new bus service
          </p>
        </div>

      </div>
    </div>

    <form onSubmit={handleSubmit} className="addbus-form">

      {/* Route Information */}

      <div className="form-section">

        <h2 className="section-title">
          Route Information
        </h2>

        <div className="input-grid">

          <InputField
            icon={<MapPin size={18} />}
            name="from"
            placeholder="From"
            value={formData.from}
            onChange={handleChange}
          />

          <InputField
            icon={<MapPin size={18} />}
            name="to"
            placeholder="To"
            value={formData.to}
            onChange={handleChange}
          />

          <InputField
            icon={<Hash size={18} />}
            name="serviceNo"
            placeholder="Service Number"
            value={formData.serviceNo}
            onChange={handleChange}
          />

          <InputField
            icon={<Bus size={18} />}
            name="plate"
            placeholder="Plate Number"
            value={formData.plate}
            onChange={handleChange}
          />

        </div>

      </div>   
        {/* Bus Details */}
<div className="form-section">

  <h2 className="section-title">
    Bus Details
  </h2>

  <div className="input-grid">

    <InputField
      icon={<Bus size={18} />}
      name="name"
      placeholder="Bus Name"
      value={formData.name}
      onChange={handleChange}
    />

    <InputField
      icon={<Building2 size={18} />}
      name="companyName"
      placeholder="Company Name"
      value={formData.companyName}
      onChange={handleChange}
    />

    <InputField
      icon={<Bus size={18} />}
      name="type"
      placeholder="Bus Type"
      value={formData.type}
      onChange={handleChange}
    />

    <InputField
      icon={<Clock size={18} />}
      name="duration"
      placeholder="Duration (e.g. 8h 30m)"
      value={formData.duration}
      onChange={handleChange}
    />

  </div>

</div>

{/* Schedule */}

<div className="form-section">

  <h2 className="section-title">
    Schedule
  </h2>

  <div className="input-grid">

    <div>
      <label className="input-label">
        Departure Time
      </label>

      <InputField
        type="time"
        name="departure"
        value={formData.departure}
        onChange={handleChange}
      />
    </div>

    <div>
      <label className="input-label">
        Arrival Time
      </label>

      <InputField
        type="time"
        name="arrival"
        value={formData.arrival}
        onChange={handleChange}
      />
    </div>

<div>
      <label className="input-label">
        Start Date
      </label>

      <InputField
        type="datetime-local"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
      />
    </div>

    <div>
      <label className="input-label">
        End Date
      </label>

      <InputField
        type="datetime-local"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
      />
    </div>

  </div>

    <div className="radio-group">

      <label className="radio-label">
        <input
          type="radio"
          value="Daily"
          checked={formData.scheduleType === "Daily"}
          onChange={(e) =>
            setFormData({
              ...formData,
              scheduleType: e.target.value,
              operatingDays: [],
            })
          }
        />
        Daily
      </label>

      <label className="radio-label">
        <input
          type="radio"
          value="Weekly"
          checked={formData.scheduleType === "Weekly"}
          onChange={(e) =>
            setFormData({
              ...formData,
              scheduleType: e.target.value,
            })
          }
        />
        Weekly
      </label>

    </div>

    {formData.scheduleType === "Weekly" && (

      <div className="operating-days">

        <label className="input-label">
          Operating Days
        </label>

        <div className="days-grid">

          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ].map((day) => (

            <label key={day} className="day-checkbox">

              <input
                type="checkbox"
                checked={formData.operatingDays.includes(day)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFormData({
                      ...formData,
                      operatingDays: [...formData.operatingDays, day],
                    });
                  } else {
                    setFormData({
                      ...formData,
                      operatingDays: formData.operatingDays.filter(
                        (d) => d !== day
                      ),
                    });
                  }
                }}
              />

              {day}

            </label>

          ))}

        </div>

      </div>

    )}

</div>
   
    {/* Pricing & Seats */}

<div className="form-section">

  <h2 className="section-title">
    Pricing & Seats
  </h2>

  <div className="input-grid">

    <InputField
      icon={<IndianRupee size={18} />}
      type="number"
      name="price"
      placeholder="Price"
      value={formData.price}
      onChange={handleChange}
    />

    <InputField
      icon={<Armchair size={18} />}
      type="number"
      name="seatsLeft"
      placeholder="Seats Left"
      value={formData.seatsLeft}
      onChange={handleChange}
    />

  </div>

</div>

{/* Preview */}

<div className="preview-card">

  <h3 className="preview-title">
    🎫 Bus Preview
  </h3>

  <div className="preview-grid">

    <PreviewRow label="Service No" value={formData.serviceNo} />
    <PreviewRow label="Bus Name" value={formData.name} />
    <PreviewRow label="Company" value={formData.companyName} />
    <PreviewRow label="Type" value={formData.type} />
    <PreviewRow label="From" value={formData.from} />
    <PreviewRow label="To" value={formData.to} />
    <PreviewRow label="Plate" value={formData.plate} />
    <PreviewRow label="Duration" value={formData.duration} />
    <PreviewRow label="Price" value={`₹${formData.price}`} />
    <PreviewRow label="Seats Left" value={formData.seatsLeft} />

  </div>

</div>

<div className="button-group">

  <button
    type="submit"
    className="primary-btn"
    onClick={() => navgiate("/BusDetails")}
  >
    🚍 Add Bus Service
  </button>

  <button
    type="submit"
    className="secondary-btn"
    onClick={() => navgiate("/BusDetails")}
  >
    ➡️ Next Page
  </button>

</div>

</form>
</div>
</div>
);
}

function InputField({
  icon,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}) {
  const showIcon =
    type !== "date" &&
    type !== "datetime-local";

  return (
    <div className="input-wrapper">

      {showIcon && (
        <div className="input-icon">
          {icon}
        </div>
      )}

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className={`custom-input ${showIcon ? "input-with-icon" : ""}`}
      />

    </div>
  );
}

function PreviewRow({ label, value }) {
  return (
    <div className="preview-row">
      <span className="preview-label">{label}</span>
      <span className="preview-value">
        {value || "-"}
      </span>
    </div>
  );
}
