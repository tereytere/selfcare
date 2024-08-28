const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, require: true },
    surname: { type: String, require: true },
    username: { type: String, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    role: { type: String, require: true, enum: ["admin", "user"], default: "user" },
    image: { type: String },
    routines: [{
        id: { type: Schema.Types.ObjectId, ref: "routine" }
    }],
    reviews: [{
        id: { type: Schema.Types.ObjectId, ref: "review" }
    }]
}, {
    collection: "user",
    timestamps: true
})

const User = mongoose.model("user", userSchema)
module.exports = User;