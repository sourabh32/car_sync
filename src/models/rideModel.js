


import mongoose from "mongoose";

const rideSchema = mongoose.Schema({
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
    }
    
});

// Check if the 'users' model already exists; if not, create it
export const Ride = mongoose.models.rides || mongoose.model("rides", rideSchema);
