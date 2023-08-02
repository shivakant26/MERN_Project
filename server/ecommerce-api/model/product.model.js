const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    productName: String,
    description: String,
    price:Number,
    category: String,
    brand: String,
    availability: Boolean,
})
productSchema.set('timestamps',true)

module.exports = mongoose.model("product",productSchema);