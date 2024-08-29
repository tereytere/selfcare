const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, require: true },
    category: { type: String, require: true, enum: ["face", "body", "mouth", "hair", "hands", "feet", "beard"] },
    properties: { type: String, require: true },
    brand: { type: String, require: true },
    image: { type: String, require: true },
    shoplink: { type: String, require: true }
}, {
    collection: "product",
    timestamps: true
})

const Product = mongoose.model("product", userSchema)
module.exports = Product;