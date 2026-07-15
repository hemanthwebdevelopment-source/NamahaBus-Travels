const mongoose = require('mongoose');
const schema = mongoose.Schema;
const busSchema = new mongoose.Schema({
  from: String,
  to: String,
  date: String,

  departureTime: String,
  arrivalTime: String,

  rating: Number,
  price: Number,

  name: String,
  companyName: String,

  buses: Number,
  seats: Number,
//   owner:{
//         type:schema.Types.ObjectId,
//         ref:"user"
//     },
});

module.exports = mongoose.model("Bus",busSchema);