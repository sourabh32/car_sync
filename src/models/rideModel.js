


import mongoose from "mongoose";

const ridesSchema = mongoose.Schema({
  
    email: {
        type: String,
        required: [true, "Please provide an email"],
       
    },
    pickUp: {
        type: String,
        required: [true, "Please provide a pickUp location"],
        
    },
    dropOff: {
        type: String,
        required: [true, "Please provide an dropOff location"],
        
    },
    selectedCar: {
        type: Object,
        required: [true, "Please provide a selected Car details"],
    },
  
    startTime:{
        type: Object,
        required: [true, "Please provide a selected Car details"],
    },
    endTime:{
        type: Object,
        required: [true, "Please provide a selected Car details"],
    },
    paymentStatus:{
        type:Boolean,
        required: [true, "Please provide a selected Car details"],
        default:false

    }
    
});


export const Ride = mongoose.models.rides || mongoose.model("rides", ridesSchema);
