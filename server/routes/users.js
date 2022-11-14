const express = require('express')
const router = express.Router()
const Users = require('../models/users')

router.get('/', async (req, res) => {
    let records = await Users.find()
    res.json(records)
});

router.post('/login', async (req, res) => {
    let record = await Users.findOne({ 
        username: req.body.username, 
        password: req.body.password
    })
    res.json(record)
});

router.post('/', async (req, res) => {
    const user_new = new Users({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone
    });
    const response = await user_new.save()
    res.json(response)
});

router.put('/:id', async (req, res) => {
    const u = await Users.findById(req.params.id)
    u.name = req.body.hasOwnProperty('name') ? req.body.name : u.name
    u.password = req.body.hasOwnProperty('password') ? req.body.password : u.password
    u.email = req.body.hasOwnProperty('email') ? req.body.email : u.email
    u.phone = req.body.hasOwnProperty('phone') ? req.body.phone : u.phone
    const response = await u.save()
    res.json(response)
});

router.delete('/:id', async (req, res) => {
    const response = await Users.findByIdAndDelete(req.params.id)
    res.json(response)
})

module.exports = router;