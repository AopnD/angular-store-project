const { Schema, model } = require('mongoose')

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required : true,
    },
    pictureUrl: {
        type: String,
        required: true,
    }
})

const Products = model("product", productSchema)

module.exports = { Products }