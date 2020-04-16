const mongoose = require("mongoose");

const TagSchema = new mongoose.Schema({
    Title: {
        type: String,
        trim: true,
    },
    Time_created: {
        type: Date,
        default: Date.now,
    },
    Time_updated: Date,
});

module.exports = mongoose.model("Tags", TagSchema);
