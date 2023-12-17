const express = require('express')
const pug = require('pug')
const path = require('path')

const app = express()
const port = 8000

app.set(path.join(__dirname, './views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, ()=>{
  console.log(`Listening on ${port}`)
})
