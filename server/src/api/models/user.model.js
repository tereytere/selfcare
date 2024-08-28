const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    about: { type: String },
    password: { type: String, require: true },
    location: { type: String, require: true },
    role: { type: String, require: true, enum: ["admin", "user"], default: "user" },
    image: { type: String },
    routines: [{ type: Schema.Types.ObjectId, ref: "routine" }]
}, {
    collection: "user",
    timestamps: true
})

const User = mongoose.model("user", userSchema)
module.exports = User;