const router = require('express').Router()
const { allLoggedUsers } = require('../helpers/allLoggedUsers')
const { Products } = require('../schemas/productsSchema')
const {
    Users
} = require('../schemas/usersSchema')
const {
    Order
} = require('../schemas/ordersSchema')

//checks if there is a user in the DB, if so logs in, if not showing error. 
// read and populate example
// const user = await Users.findOne({email: req.session.user.email}).populate('cart.prodID')
//sending spesific user cart to the client.
router.post(`/login`, async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body
        const user = await Users.findOne({
            email: req.body.email,
            password: req.body.password}).populate('cart.items.prodID')
        if(!user){
            res.send({err: true, msg: "wrong email or password"}).status(401)
        }else{
            req.session.user = user
            res.send(user).status(200)
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

//registers users. 
router.post(`/register`, async (req, res) => {
    try {
        const user = new Users(req.body)
        await user.save()
        res.send({msg: "Registration complete"}).status(201)

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

//logging out. 
router.delete(`/logout`, allLoggedUsers, (req, res) => {
    try {
req.session.destroy()
res.send({msg: "Logged Out Successfully"}).status(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

//showing all products that are in the DB collection
router.get(`/show-all-products`, allLoggedUsers, async (req, res) => {
    try {
        const allproducts = await Products.find({})
        res.send(allproducts).status(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})


router.post('/find-product-by-category', allLoggedUsers, async (req, res)=>{
try {
    const {
        category
    } = req.body
const categoryProducts = await Products.find({category: category}).exec()
res.send(categoryProducts).status(200)
} catch (error) {
    console.log(error)
    res.sendStatus(500)
}
})

router.post('/find-product-by-name', allLoggedUsers, async (req, res)=>{
    try {
        const {
            productName
        } = req.body
        const namedProduct= await Products.find({name: productName}).exec()
        res.send(namedProduct).status(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.get('/order-amount', allLoggedUsers, async (req,res)=>{
    try {
        const allOrders = await Order.find({})
        res.send(allOrders).status(200)
    } catch (error) {
        console.log(error)
    res.sendStatus(500)
    }

})


module.exports = router