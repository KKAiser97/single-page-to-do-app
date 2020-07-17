const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
var port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan('dev'))

app.set('view engine', 'ejs')

app.get('/', (req, res)=>res.render('index'))

app.listen(port, ()=>
    console.log(`App is listening on port ${port}`))
