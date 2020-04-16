const express = require('express')
const server = express()

server.get("/", function(req, res) {
  res.sendFile(__dirname + "/pages/index.html")
})


server.listen(3000, () => console.log("server ok"))