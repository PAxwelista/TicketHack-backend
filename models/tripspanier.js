const mongoose= require('mongoose');
const tripspanierSchema= mongoose.Schema({
    departure : String, 
    arrival : String, 
    date : Date, 
    price : Number,
    isPaid: Boolean,
    });

const Tripspanier=mongoose.model("tripspaniers",tripspanierSchema);
module.exports= Tripspanier;
