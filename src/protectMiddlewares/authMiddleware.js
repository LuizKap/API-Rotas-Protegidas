const jwt = require('jsonwebtoken')
const users = require('../model/users')

const secretKey = 'chave-ultra-secreta'


const authMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization token required' })
    }

    const token = authHeader.split(' ')[1]

    try {

        const decodedToken = jwt.verify(token, secretKey)

        const user = users.find(user => user.email === decodedToken.email)
        if (!user) {
            return res.status(401).json({ message: 'invalid user' })
        }

        req.authenticatedUser = user

        next()
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' })
    }

}

module.exports = authMiddleware