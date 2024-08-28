const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
}, {
    collection: "review",
    timestamps: true
})

const Review = mongoose.model("review", userSchema)
module.exports = Review;