const mongoose=require("mongoose");

const AdSchema=mongoose.Schema({
    name: String,
    description :String,
    category : String,
    image : String,
    location : String,
    postedAt : String,
    price : String
});

const AdModel=mongoose.model("mock-12-user",AdSchema);
module.exports={
    AdModel
}