const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const User = new Schema({
    email:{
        type:String,
        required:true,
    },
     role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
})
User.plugin(passportLocalMongoose.default);
module.exports = mongoose.model("user",User); 