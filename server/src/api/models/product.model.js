const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
}, {
    collection: "product",
    timestamps: true
})

const Product = mongoose.model("product", userSchema)
module.exports = Product;