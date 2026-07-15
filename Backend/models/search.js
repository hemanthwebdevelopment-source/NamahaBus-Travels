const mongoose = require("mongoose");
const schema = mongoose.Schema;

const destination = new schema({
       from:"String",
       to:"String",
       date:{
        type:Date,
       //  default:Date.now()
       }
})
module.exports = mongoose.model("destination",destination);