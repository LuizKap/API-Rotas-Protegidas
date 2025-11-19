const express = require('express')
const welcomeMiddleware = require('../welcomeMiddleware/welcomeMiddleware')
const welcomeRouter = express.Router()

module.exports = welcomeRouter

welcomeRouter.get('/welcome', welcomeMiddleware, (req, res) => {

    res.json({ message: `Welcome ${req.authenticatedUser?.name ?? 'Visitor'}, enjoy.` })
})