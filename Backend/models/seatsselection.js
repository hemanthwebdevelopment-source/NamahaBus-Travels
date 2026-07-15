const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let seatselection = new Schema({
    seat:String,
    gender:String,
    busId:String,
    journeyDate:String,
});
module.exports = mongoose.model("seatselection",seatselection);