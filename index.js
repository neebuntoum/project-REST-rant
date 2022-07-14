require('dotenv').config()

const express = require('express')

const app = express()

app.post('/', (req, res) => {
    res.send('Hello Reveiwers')
})

app.listen(process.env.PORT, function () {
    console.log('I am awake!')
})