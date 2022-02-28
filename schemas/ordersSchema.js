const {
    Schema,
    model,
    SchemaTypes
} = require('mongoose')

const orderSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    date: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    cart: {
        items: [{
            prodID: {
                type: SchemaTypes.ObjectId,
                ref: "product"
            },
            qty: {
                type: Number,
                default: 1
            }
        }],
        totalPrice: Number
    }
})

const Order = model("order", orderSchema)

module.exports = {
    Order
}