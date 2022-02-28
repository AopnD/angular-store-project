const router = require('express').Router()
const {
    Products
} = require('../schemas/productsSchema')

router.post(`/add-product`, async (req, res) => {
    try {
        const product = new Products(req.body)
        await product.save()
        res.send({status: 201, msg:"Product-added"})
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.put(`/delete-product/:id`, async (req, res) => {
    try {
        await Products.findByIdAndRemove(req.params.id)
        res.send({status:200, msg:"Product-deleted"})
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.post(`/edit-product/:id`, async (req, res) => {
    try {
        const {
            name,
            category,
            price,
            pictureUrl
        }= req.body
        await Products.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            pictureUrl: req.body.pictureUrl
        })
        res.send({status:200, msg:"Product-editted"})
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

module.exports = router