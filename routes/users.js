const router = require('express').Router()
const {
    onlyUsers
} = require('../helpers/onlyUsers')
const {
    Products
} = require('../schemas/productsSchema')
const {
    Users
} = require('../schemas/usersSchema')
const {
    Order
} = require('../schemas/ordersSchema')

//adding product to a spesific user cart.
router.put(`/add-to-cart/:id`, onlyUsers, async (req, res) => {
    try {
        const {
            id: prodID
        } = req.params
        const {
            qty
        } = req.body
        const user = await Users.findOne({
            email: req.session.user.email
        })
        const product = await Products.findById(prodID)

        if (!qty || qty <= 0) {
            res.send({
                err: true,
                msg: "not a valid option"
            }).status(400)
        }

        if (!user.cart.items.length) {
            user.cart.items.push({
                prodID,
                qty
            })
            user.cart.totalPrice = product.price * qty
        } else {
            const isExisting = user.cart.items.filter(item => item.prodID == prodID)

            if (!isExisting.length) {
                user.cart.items.push({
                    prodID,
                    qty
                })
                user.cart.totalPrice = user.cart.totalPrice + product.price * qty
            } else {
                isExisting[0].qty += qty
                user.cart.totalPrice = user.cart.totalPrice + product.price * qty
            }

        }
        user.populate('cart.items.prodID')
        await user.save()
        res.send(user.cart).status(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

//removing item from spesific user cart by the user.
router.put(`/remove-from-cart/:id`, onlyUsers, async (req, res) => {
    try {
        const {
            id: _id
        } = req.params
        const user = await Users.findOne({
            email: req.session.user.email
        }).populate('cart.items.prodID')
        const newCart = user.cart.items.filter(item => item._id != _id)
        const removedItem = user.cart.items.filter(item => item._id == _id)
        const product = await Products.findById(removedItem[0].prodID)
        user.cart.items = newCart
        user.cart.totalPrice = user.cart.totalPrice - (removedItem[0].qty * product.price)
        await user.save()
        res.send(user.cart).status(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})


//clearing user cart.
router.get(`/buy`, onlyUsers, async (req, res) => {
    try {
        const user = await Users.findOne({
            email: req.session.user.email
        })
        if (!user.cart.items.length) {
            res.status(400).send({
                err: true,
                msg: "Please fill cart first"
            })
        }
        user.cart.items = []
        user.cart.totalPrice = 0
        await user.save()
        res.status(200).send({
            msg: "order is filled"
        })
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

//checking if there's less than 3 orders on the date
router.post('/check-order-date', onlyUsers, async (req, res) => {
    try {
        const {
            date
        } = req.body
        const order = await Order.find({
            date: date
        })
        if (order.length >= 3) {
            res.send({
                msg: false
            }).status(200)
        } else {
            res.send({
                msg: true
            }).status(200)
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.post('/save-order', onlyUsers, async (req, res) => {
    try {
  const order = new Order(req.body)
  await order.save()
  res.send({msg: "order completed"}).status(201)
    } 
    catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})



module.exports = router