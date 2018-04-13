const express = require('express')
const app = express()

var routes = require('./routes')(app);

app.listen(3333, function () {
  console.log('starting on port 3333!')
})

module.exports = app;
