const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, require: true },
    category: { type: String, require: true, enum: ["face", "body", "mouth", "hair", "hands", "feet", "beard"] },
    applyschedule: { type: String, require: true, enum: ["morning", "afternoon", "night", "other"] },
    repeat: [{ type: String, require: true }],
    products: [{ type: Schema.Types.ObjectId, ref: "product" }],
    usesteps: { type: String },
    description: { type: String },
    reviews: [{ type: Schema.Types.ObjectId, ref: "review" }],
}, {
    collection: "routine",
    timestamps: true
})

const Routine = mongoose.model("routine", userSchema)

module.exports = Routine;