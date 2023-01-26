const mongoose = require('mongoose')

const SessionSchema = new mongoose.Schema({
    userId: String,
    counselorId: String,
    timeSlot: String,
    sessionDate: {
        type: String
    },
    bookedDate: {
        type: String
    },

    plan: String
});

module.exports = mongoose.model("session", SessionSchema);