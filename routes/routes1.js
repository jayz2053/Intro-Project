var User = require('../models/user')
module.exports = function(app){

  app.get('/', (req, res) =>{
    res.send("Hello World!")
  })



  app.get('/:uname/:pword', (req, res) =>{

    var newUser = new User()
    newUser.local.userName = req.params.uname
    newUser.local.password = req.params.pword

    console.log(`Username: ${newUser.local.userName}, Password: ${newUser.local.password}`)

    newUser.save(err =>{
      if(err)
        throw err;
    })

  })





}
