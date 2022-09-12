console.log('May Node be with you')
const express = require ('express');
const app = express(); 

app.listen(3000, function() {        // creating a server that browsers can connect to 
    console.log('listening on 3000')
  })

  app.use(bodyParser.urlencoded({ extended: true }))

  app.get('/', (req, res) => {    // using send file method to serve up index.html page back to browser
    res.sendFile(__dirname + '/index.html')
  })
  app.post('/quotes', (req,res) => {
    console.log('yoooo')
  })