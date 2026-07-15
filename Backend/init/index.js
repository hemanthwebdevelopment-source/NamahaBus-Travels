const mongoose = require("mongoose");
const initdata = require("./busdetails.js");
// const listing = require("../models/listing.js");
// const details = require("../models/Bus.js");
const BusDetails = require("../models/BusDetails.js");
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/NamahaBus");
}
main().then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
})

const initDb = async ()=>{
    await BusDetails.deleteMany({});
    initdata.data = initdata.busDetails.map((obj)=>({...obj,owner:"699f2f9c03a5828d6aaa1cab"}));
    await BusDetails.insertMany(initdata.data);
    console.log("data was intialized");
}
initDb();