const mongoose = require("mongoose");

const StreamerModel = mongoose.model("Streamer", {
    name: {
        type: String,
        required: true,
    },
    lastname: String,
    username: String,
    age: Number,
    tags: [String],
});

module.exports = StreamerModel;
