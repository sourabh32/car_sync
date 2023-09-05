


import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    role: {
        type: String,
        required: [true, "Please provide a role"],
        default:"customer"
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
});

// Check if the 'users' model already exists; if not, create it
export const User = mongoose.models.users || mongoose.model("users", userSchema);
