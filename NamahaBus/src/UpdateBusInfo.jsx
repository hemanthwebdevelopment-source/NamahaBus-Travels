import React, { useState,useEffect } from "react";
import api from "./api";
import { useNavigate,useLocation } from "react-router-dom";
import {
  Bus,
  MapPin,
  Calendar,
  Clock,
  Building2,
  Star,
  IndianRupee,
  Armchair,
} from "lucide-react";

export default function UpdateBusInfo() {
  const navigate = useNavigate();
   const location = useLocation(); 
   console.log(location.state.b);
   const data = location.state.b;
   let id = data._id;
   console.log(id);
   console.log(data.from);
  const [formData, setFormData] = useState({
    from: data.from,
    to: data.to,
    date: data.date,
    departureTime: data.departureTime,
    arrivalTime: data.arrivalTime,
    rating: data.rating,
    price: data.price,
    name: data.name,
    companyName: data.companyName,
    buses: data.buses,
    seats: data.seats,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
// console.log(formData)
const handleSubmit = async (e) => {
  e.preventDefault();
    try {
    console.log(formData);
    // const res = await axios.put(`http://localhost:3000/update/${id}`,
    const res = await api.put(`update/${id}`,
      formData,{
  withCredentials: true,
}
    );
    console.log(res.data);
    alert("Bus Added Successfully 🚍");
    setFormData({
      from: "",
      to: "",
      date: "",
      departureTime: "",
      arrivalTime: "",
      rating: "",
      price: "",
      name: "",
      companyName: "",
      buses: "",
      seats: "",
      
    });
    navigate("/OwnerBusinfo");
  } catch (err) {
    console.log(err);
    alert("Failed to add bus");
  }
};
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   useEffect(() => {
  //             axios.post("http://localhost:3000/addBus",formData)
  //               .then((res) => {
  //                 console.log(res);
  //     //   setFormData({
  //     //   from: "",
  //     //   to: "",
  //     //   date: "",
  //     //   departureTime: "",
  //     //   arrivalTime: "",
  //     //   rating: "",
  //     //   price: "",
  //     //   name: "",
  //     //   companyName: "",
  //     //   buses: "",
  //     //   seats: "",
  //     // });
  //                 // setbusesDetails(res.data.busesDetails);
  //               })
  //               .catch((err)=>{
  //                   console.log(err);
  //     alert("Failed to add bus");
  //               })
          
  //           }, []);
  //   // alert("Bus Added Successfully 🚍");
  // };
// useEffect(() => {
//               axios.post("http://localhost:3000/addBus",formData)
//                 .then((res) => {
//                   console.log(res);
//       //   setFormData({
//       //   from: "",
//       //   to: "",
//       //   date: "",
//       //   departureTime: "",
//       //   arrivalTime: "",
//       //   rating: "",
//       //   price: "",
//       //   name: "",
//       //   companyName: "",
//       //   buses: "",
//       //   seats: "",
//       // });
//                  // setbusesDetails(res.data.busesDetails);
//                 })
//                 .catch((err)=>{
//                     console.log(err);
//       alert("Failed to add bus");
//                 })
          
//             }, []);
// try {
//        axios.post("http://localhost:3000/addBus", formData);

//       // alert("Bus Added Successfully 🚍");

//       setFormData({
//         from: "",
//         to: "",
//         date: "",
//         departureTime: "",
//         arrivalTime: "",
//         rating: "",
//         price: "",
//         name: "",
//         companyName: "",
//         buses: "",
//         seats: "",
//       });
//     } catch (err) {
//       console.error(err);
//       alert("Failed to add bus");
//     }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center  ">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl  overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-15">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-4 rounded-2xl">
              <Bus size={40} className="text-white" />
            </div>

            <div>
              <h1 className="text-4xl  font-bold text-white">
                Add New Bus
              </h1>
              <p className="text-white/80 mt-1">
                Manage routes, schedules and pricing
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-4 space-y-8 "
        >
          {/* Route Information */}
          <div>
            <h2 className="text-xl font-semibold text-slate-800 mb-4 ">
              Route Information
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              <InputField
                icon={<MapPin size={18} />} 
                name="from" 
                placeholder="From City"
                value={formData.from}
                onChange={handleChange}
              />
             <InputField
                icon={<MapPin size={18} pl-5/>}
                name="to"
                placeholder="To City"
                value={formData.to}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Schedule */}
          <div>
            <h2 className="text-xl font-semibold text-slate-800 mb-4 mt-4">
              Schedule
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              <div>
  <label className="block mb-2 text-sm font-medium text-slate-600">
    Departure Date
  </label>
              <InputField
                icon={<Calendar size={18} />}
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
              </div>
              <div>
  <label className="block mb-2 text-sm font-medium text-slate-600">
    Departure Time
  </label>
              <InputField
                icon={<Clock size={18} />} 
                type="time"
                name="departureTime"
                value={formData.departureTime}
                onChange={handleChange}
              />
</div>
    <div>
  <label className="block mb-2 text-sm font-medium text-slate-600">
    Arrival Time
  </label>
         <InputField
                icon={<Clock size={18} />}
                type="time"
                name="arrivalTime"
                value={formData.arrivalTime}
                onChange={handleChange}
              />
  {/* <input
    type="time"
    name="departureTime"
    value={formData.departureTime}
    onChange={handleChange}
    className="
      w-full
      h-14
      px-4
      border
      border-slate-300
      rounded-2xl
    "
  /> */}
</div>
       </div>
          </div>

          {/* Bus Details */}
          <div>
            <h2 className="text-xl font-semibold text-slate-800 mb-4 mt-4">
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
            </div>
          </div>

          {/* Pricing */}
          <div>
            <h2 className="text-xl font-semibold text-slate-800 mb-4 mt-4">
              Pricing & Capacity
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
                icon={<Star size={18} />}
                type="number"
                name="rating"
                placeholder="Rating"
                value={formData.rating}
                onChange={handleChange}
              />

              <InputField
                icon={<Bus size={18} />}
                type="number"
                name="buses"
                placeholder="Buses"
                value={formData.buses}
                onChange={handleChange}
              />

              <InputField
                icon={<Armchair size={18} />}
                type="number"
                name="seats"
                placeholder="Seats"
                value={formData.seats}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="bg-slate-50 border mt-5 border-slate-200 rounded-3xl overflow-hidden shadow-sm">
          <div className="bg-blue-600 text-white mb-3 px-6 py-4">
          <h3 className="text-lg font-bold">
      🎫 Live Ticket Preview
    </h3>
  </div>

  <div className="p-6 m-5 ">
    
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xs text-slate-500">FROM</p>
        <h2 className="text-xl font-bold">
          {formData.from || "City"}
        </h2>
      </div>

      <div className="text-blue-600 text-2xl">
        →
      </div>

      <div className="text-right">
        <p className="text-xs text-slate-500">TO</p>
        <h2 className="text-xl font-bold">
          {formData.to || "City"}
        </h2>
      </div>
    </div>

    <div className="border-t border-dashed border-slate-300 my-5"></div>

    <div className="space-y-3">

      <div className="flex justify-between">
        <span className="text-slate-500">
          Bus Name
        </span>

        <span className="font-semibold">
          {formData.name || "Volvo Sleeper AC"}
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-500">
          Company
        </span>

        <span className="font-semibold">
          {formData.companyName || "Namaha Travels"}
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-500">
          Date
        </span>

        <span className="font-semibold">
          {formData.date || "Not Selected"}
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-500">
          Departure
        </span>

        <span className="font-semibold">
          {formData.departureTime || "--:--"}
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-500">
          Arrival
        </span>

        <span className="font-semibold">
          {formData.arrivalTime || "--:--"}
        </span>
      </div>

    </div>

    <div className="mt-5 grid grid-cols-3 gap-3">

      <div className="bg-blue-50 rounded-2xl p-3 text-center">
        <p className="text-xs text-slate-500">
          Price
        </p>

        <h4 className="font-bold text-blue-600">
          ₹{formData.price || "0"}
        </h4>
      </div>

      <div className="bg-yellow-50 rounded-2xl p-3 text-center">
        <p className="text-xs text-slate-500">
          Rating
        </p>

        <h4 className="font-bold text-yellow-600">
          ⭐ {formData.rating || "0"}
        </h4>
      </div>

      <div className="bg-green-50 rounded-2xl p-3 text-center">
        <p className="text-xs text-slate-500">
          Seats
        </p>

        <h4 className="font-bold text-green-600">
          {formData.seats || "0"}
        </h4>
      </div>

    </div>
  </div>
</div>

          {/* Submit Button */}
          <button
            type="submit"
            className="
              w-full mt-5
              py-4
              rounded-2xl
              bg-blue-600
              hover:bg-blue-700
              text-white
              text-lg
              font-semibold
              transition-all
            "
          >
            🚍 Update Bus Route
          </button>
                  </form>
      </div>
    </div>
  )
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
    type !== "date" && type !== "time";

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
        className={`
          text-center
          w-full
          py-2
          pr-4
          border
          border-slate-300
          rounded-2xl
          bg-white
          text-slate-800
          focus:outline-none
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
          ${showIcon ? "pl-12" : "px-4"}
        `}
  //         className="
  //   w-full text-start
  //   h-14
  //   pl-14
  //   pr-4
  //   text-left
  //   border
  //   border-slate-300
  //   rounded-2xl
  //   bg-white
  //   text-slate-800
  //   placeholder:text-slate-400
  //   focus:outline-none
  //   focus:border-blue-500
  //   focus:ring-4
  //   focus:ring-blue-100
  // "
/>
    </div>
  );
}
function PreviewRow({ label, value }) {
  return (
    <div className="flex justify-between items-center py-2">
      <span className="text-slate-500">
        {label}
      </span>

      <span className="font-semibold text-slate-800">
        {value}
      </span>
    </div>
  );
}

