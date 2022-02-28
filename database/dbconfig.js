const { connect } = require('mongoose')



module.exports.connectToMongoDB = async () => {

    try {
        await connect("mongodb://localhost/mystore")
        console.log("connected to mongodb.mystore 🤑")
    } catch (error) {
        console.log(error)
    }

}