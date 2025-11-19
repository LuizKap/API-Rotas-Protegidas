const jwt = require('jsonwebtoken')
const users = require('../model/users')

const secretKey = 'chave-ultra-secreta'

const welcomeMiddleware = (req, res, next) => {
    
    if (!authorization) return next()

    try {
        const token = authorization.split(' ')[1]
        const decoded = jwt.verify(token, secretKey)
        const user = users.find(u => u.email === decoded.email)

        if (user) {
            req.authenticatedUser = user
        }
    } catch (err) {

    }

    next()
}

module.exports = welcomeMiddleware