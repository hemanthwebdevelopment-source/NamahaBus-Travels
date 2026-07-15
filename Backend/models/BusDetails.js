const mongoose = require("mongoose");
const DetailsSchema = mongoose.Schema;

const BusDetails = new DetailsSchema({
     journeyDate:Date,
     serviceNo:String,
      type:String,
      departure:String,
      arrival:String,
      duration:String,
      from:String,
      to:String,
      plate:String,
      price:Number,
      seatsLeft:Number,
      startDate:String,
      endDate:String,
      name:String,
      companyName:String,

  scheduleType: {
    type: String,
    enum: ["Daily", "Weekly"],
    default: "Daily"
  },

  operatingDays: {
    type: [String],
    default: []
  },
  //     busId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Bus",
  //   // required: true,
  // },
})

module.exports = mongoose.model("BusDetails",BusDetails);