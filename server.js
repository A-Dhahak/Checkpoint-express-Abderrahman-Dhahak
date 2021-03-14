const express = require('express')
const app = express()
const port = 5000


app.get('/', (req, res) => {
    res.sendFile(__dirname+"/Public/HomePage.html")
  })
  app.get('/contact', (req, res) => {
    res.sendFile(__dirname+"/Public/ContactUs.html")
  })
  app.get('/services', (req, res) => {
    res.sendFile(__dirname+"/Public/OurServices.html")
  })
  app.get('/style.css', (req, res) => {
    res.sendFile(__dirname+"/Public/style.css")
  })
app.listen(port, () => {
    console.log(`Hello`)
  })