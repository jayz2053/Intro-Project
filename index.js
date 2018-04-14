var express = require('express')
var app = express()
var port = process.env.PORT || 5000
var  morgan = require('morgan')
var session = require('express-session')
var mongoose = require('mongoose')
var configDB = require('./.config/database.js')

var opts = {
  server:{
    socketOptions:{keepAlive: 1}
  }
}


mongoose.connect(configDB.url, opts)


app.use(morgan('dev'))
app.use(session({secret: 'intro cookie',
                saveUninitialized: true,
                resave: true}))
/*
app.use('/', (req, res) => {
  res.send('Hello World')
  console.log('==============')
  console.log(req.session)
})
*/
require('./routes/routes1.js')(app)

app.listen(port)
console.log(`Server running on port ${port}`)
