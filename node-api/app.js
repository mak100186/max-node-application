
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongodb = require('mongoose')
const morgan = require('morgan')
const dotenv = require('dotenv')
dotenv.config()

//connect to db
mongodb.connect(process.env.MONGO_LOCAL)
    .then(() => console.log('DB Connected'))


mongodb.connection.on('error', err =>
{
    console.log(`DB connection error: ${ err.message }`)
});

//bring in the routes
const getRoutes = require("./routes/routes")

//middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use("/", getRoutes)

//start server
const port = process.env.PORT || 8055
app.listen(port, () => { console.log(`A node js api is listening on port: ${ port }`) })