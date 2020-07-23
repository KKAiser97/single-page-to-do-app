const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require("cors")
const setupController = require('./api/controllers/setupController')

const app = express()
var port = process.env.PORT || 3002
mongoose.connect('mongodb+srv://testdb:testdb@cluster0.zmigz.mongodb.net/testDB1?retryWrites=true&w=majority',{ useNewUrlParser: true , useUnifiedTopology: true })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(cors())
app.use('/assets', express.static(__dirname + '/publics'))

app.set('view engine', 'ejs')

app.get('/', (req, res)=>res.render('index'))

app.listen(port, ()=>
    console.log(`App is listening on port ${port}`))

setupController(app)