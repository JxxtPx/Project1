const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");
const { init } = require("../models/review.js");

const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("connected to db")
}).catch(err=>{
    console.log(err)
});

async function main() {
    await mongoose.connect(MONGO_URL);
    
};

const initDB=async()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:'67b6b1004f1e90de30492885'}));
    await Listing.insertMany(initData.data);
    console.log("datawas intialised")
}

initDB();




// const addOne=async()=>{
//     let newList=new Listing({
//         "title": "Luxury Downtown Loft",
//         "description": "An elegant space in the heart of the city with breathtaking skyline views.",
//         "image": "https://www.luxuryretreats.com/dynamic-images/6000-6999/6502/6502_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
//         "price": 10550,
//         "location": "New York City",
//         "country": "United States"
//       }
//       );
//     await newList.save();
//     console.log("saved")
// }

// addOne();