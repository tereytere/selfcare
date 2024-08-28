const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
}, {
    collection: "routine",
    timestamps: true
})

const Routine = mongoose.model("routine", userSchema)
module.exports = Routine;