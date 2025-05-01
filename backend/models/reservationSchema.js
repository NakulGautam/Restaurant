import mongoose from "mongoose"
import validator from "validator"

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must contain at least 3 characters!"],
        maxLength: [10, "First name cannot exceed more than 10 characters!"],
        match: [/^[A-Za-z\s]+$/, "First name should contain only letters"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must contain at least 3 characters!"],
        maxLength: [10, "Last name cannot exceed more than 10 characters!"],
        match: [/^[A-Za-z\s]+$/, "Last name should contain only letters"],

    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email!"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone number must contain at least 10 characters!"],
        maxLength: [10, "Phone number canot exceed more than 10 characters!"],
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);