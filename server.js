require('dotenv').config()
const express        = require('express')
const morgan         = require('morgan')
const mongoose       = require('mongoose')
const bodyParser     = require('body-parser')
const methodOverride = require('method-override')

const app = express()

const router = require('./routes/router')

//connect to mongodb
mongoose.connect("mongodb://localhost:27017/"+process.env.DB_NAME, {
    useNewUrlParser: true,
    useCreateIndex: true
})

app.use(express.static(__dirname+"/public"))
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride())

app.use('/api', router)

//set routes to load the application
app.get('*', (req, res) => {
    res.sendFile('./public/index.html')
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server now is running....')
})