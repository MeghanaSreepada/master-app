const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const mongodb = "mongodb://localhost:27017"
const users = require('./routes/users')
app.use(express.json())

mongoose.connect(mongodb, { useNewUrlParser: true })
const con = mongoose.connection
con.on('open', () => {
    console.log('Connected to MongoDB!')
});

app.get('/', (req, res) => {
    res.send('I am here!')
});

app.use('/users', users);

app.listen(port, () => {
    console.log("Server started on port " + port)
});