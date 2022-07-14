require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Hello reviews!')
})

app.get('*', (req, res) => {
    res.status(404).send(`<h1>404 page</h1>`)
    
})

app.listen(process.env.PORT, function () {
    console.log('I am awake!')
})