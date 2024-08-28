const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    date: { type: Date, default: Date.now },
    status: {
        type: String, enum: [
            "show", "hidden"
        ]
    },
    stars: {
        type: Number, require: true, enum: [
            1,
            2,
            3,
            4,
            5,
        ],
    },
}, {
    collection: "review",
    timestamps: true
})

const Review = mongoose.model("review", userSchema)
module.exports = Review;