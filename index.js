var express = require('express')
var app = express()
var port = process.env.PORT || 5000
var  morgan = require('morgan')
var session = require('express-session')
var mongoose = require('mongoose')
var configDB = require('./.config/database.js')
var bodyParser = require('body-parser')


app.set('view engine', 'ejs')
mongoose.connect(configDB.url, configDB.opts)


app.use(morgan('dev'))
app.use(session({secret: 'intro cookie',
                saveUninitialized: true,
                resave: true}))

require('./routes/routes1.js')(app)

app.listen(port)
console.log(`Server running on port ${port}`)
