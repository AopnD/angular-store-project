//imports
const express = require('express')
const session = require('express-session')
const cors = require('cors')
const mongoose = require('mongoose')
const { connectToMongoDB } = require('./database/dbconfig')

//middlewares
const app = express()

app.use(express.json())

app.use(session({
    secret: "secret password fo this session",
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
        //cookie age one day
    }
}))
app.use(cors({
    origin: "http://localhost:4200",
    credentials: true
}))




//routes
app.use('/allusers', require('./routes/allUsers'))
app.use('/admin', require('./routes/admin'))
app.use('/users', require('./routes/users'))



connectToMongoDB()
app.listen(1003, _ => console.log('server up and runnin 🥰'))