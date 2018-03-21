const express = require('express')
const app = express()

app.get('/', (req, res) => {
  const ip = req.header('x-forwarded-for') || req.connection.remoteAddress
  res.end(ip)
})

app.listen(3000)
