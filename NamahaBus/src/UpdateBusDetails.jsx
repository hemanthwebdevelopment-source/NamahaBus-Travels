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

export default function UpdateBusDetails() {
     const location = useLocation();
     const navigate = useNavigate();
    const bus = location.state.bus;
     let id = bus._id;
    console.log(bus);
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
    serviceNo: bus.serviceNo,
    type: bus.type,
    departure: bus.departure,
    arrival: bus.arrival,
    duration: bus.duration,
    from: bus.from,
    to: bus.to,
    plate: bus.plate,
    price: bus.price,
    seatsLeft: bus.seatsLeft,
    startDate: bus.startDate,
    endDate: bus.endDate,
    name: bus.name,
    companyName: bus.companyName,
    scheduleType: bus.scheduleType,   
     operatingDays: bus.operatingDays,
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
      const res = await axios.put(
        `http://localhost:3000/BusDetails/${id}`,
        formData,{
  withCredentials: true,
}
      );

      console.log(res.data);

      alert("Bus Details Updated Successfully 🚍");

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
       navigate("/BusDetails",{
                state:{from:bus.from,to:bus.to,date:bus.date}
            });
    // navigate("/OwnerBusinfo")
    } catch (err) {
      console.log(err);
      alert("Failed to add bus");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center py-10">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-center">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-4 rounded-2xl">
              <Bus size={40} className="text-white" />
            </div>
             <div>
              <h1 className="text-4xl font-bold text-white">
                Add Bus Services
              </h1>
                 <p className="text-white/80">
                Create a new bus service
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-8">

          {/* Route Information */}
          <div>
            <h2 className="text-xl font-semibold mb-4 mt-4">
              Route Information
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
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
          <div>
            <h2 className="text-xl font-semibold mb-4 mt-4">
              Bus Details
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
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
          <div>
            <h2 className="text-xl font-semibold mb-4 mt-4">
              Schedule
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
                          <div>
                  <label className="block mb-2 text-sm font-medium text-slate-600">
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
  <label className="block mb-2 text-sm font-medium text-slate-600">
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
  <label>
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
</div>
<div>
  <label style={{ marginLeft: "20px" }}>
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
    <div className="md:col-span-2">
        <label className="block mb-2 text-sm font-medium">
            Operating Days
        </label>

        <div className="grid grid-cols-4 gap-2">
            {[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
            ].map((day) => (
                <label key={day} className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={formData.operatingDays.includes(day)}
                        onChange={(e) => {
                            if (e.target.checked) {
                                setFormData({
                                    ...formData,
                                    operatingDays: [
                                        ...formData.operatingDays,
                                        day,
                                    ],
                                });
                            } else {
                                setFormData({
                                    ...formData,
                                    operatingDays:
                                        formData.operatingDays.filter(
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
<div>
  <label className="block mb-2 text-sm font-medium text-slate-600">
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
  <label className="block mb-2 text-sm font-medium text-slate-600">
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
          </div>

          {/* Pricing */}
          <div>
            <h2 className="text-xl font-semibold mb-4 mt-4">
              Pricing & Seats
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
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
          <div className="bg-slate-50 rounded-3xl border p-6">
            <h3 className="text-xl font-bold mb-4 mt-4">
              🎫 Bus Preview
            </h3>

            <div className="grid md:grid-cols-2 gap-4 p-4">

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

          <button
            type="submit"
            className=" mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold text-lg"
          >
            🚍 Update Bus Service
          </button>

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
    <div className="relative">
      {showIcon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
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
        className={`text-center w-full border border-slate-300 rounded-2xl py-3 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          showIcon ? "pl-12" : "px-4"
        }`}
      />
    </div>
  );
}

function PreviewRow({ label, value }) {
  return (
    <div className="flex justify-between border-b py-2">
      <span className="text-slate-500">{label}</span>
      <span className="font-semibold">
        {value || "-"}
      </span>
    </div>
  );
}
