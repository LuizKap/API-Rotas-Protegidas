const express = require('express')
const users = require('../model/users')
const { isValidEmailMessage, isEmailRegistered } = require('../helper/validateFuncs')

const authRouter = express.Router()
const jwt = require('jsonwebtoken')

module.exports = authRouter


authRouter.post('/register', (req, res) => {
    const { name, email, password } = req.body


    if (!name || !email || !password || typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {

        return res.status(400).json({ message: 'parameters must be string && can`t be empty' })
    }

    const errorMessage = isValidEmailMessage(email)
    if (errorMessage) {
        return res.status(400).json({ message: errorMessage })
    }

    if (isEmailRegistered(email, users)) {

        return res.status(409).json({ message: 'invalid email' })
    }

    const user = {
        name: name,
        email: email,
        password: password,
        role: 'standard'
    }
    users.push(user)
    return res.status(201).json({ message: `User with name ${user.name} registered with success` })
})



authRouter.post('/login', (req, res) => {
    const { email, password } = req.body

    const user = users.find(user => user.email === email)
    if (!user) {
        return res.status(401).json({ message: 'invalid email/password' })
    }

    if (user.password !== password) {
        return res.status(401).json({ message: 'invalid email/password' })
    }

    const payload = { name: user.name, email: user.email, role: user.role }
    const secretKey = 'chave-ultra-secreta'

    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' })

    return res.status(200).json({ token })

})

