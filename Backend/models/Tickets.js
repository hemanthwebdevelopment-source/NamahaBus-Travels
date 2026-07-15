const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BusDetailsSchema = new Schema(
  {
    serviceNo: String,
    type: String,
    from: String,
    to: String,
    departure: String,
    arrival: String,
    journeyDate: Date,
  },
  { _id: false }
);
const ticket = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  busId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BusDetails",
  },

  busDetails: BusDetailsSchema,
  amount: Number,
  
  paymentStatus: {
    type: String,
    default: "paid",
  },
  passengers:[{
    name:String,
    age:String,
    gender:String,  
    seat: String,
  }],
    bookedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ticket",ticket)