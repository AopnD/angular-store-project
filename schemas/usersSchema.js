const {
    Schema,
    model,
    SchemaTypes
} = require('mongoose')

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    userID: {
        type: Number,
        required: true,
    },
    role: {
        type: String,
        default: "user",
        immutable: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        city: {
            type: String,
            required: true,
        },
        street: {
            type: String,
            required: true,
        },
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

const Users = model("user", userSchema)


module.exports = {
    Users
}