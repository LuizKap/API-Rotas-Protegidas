const express = require('express')
const authMiddleware = require('../protectMiddlewares/authMiddleware')
const adminMiddleware = require('../protectMiddlewares/adminMiddleware')
const adminControllers = require('../controllers/adminControllers')
const protectedRouter = express.Router()

module.exports = protectedRouter


protectedRouter.get('/manage', authMiddleware, adminMiddleware, (req, res) => {
    res.json({ message: `Welcome to protected route, ${req.authenticatedUser.name}, your role is ${req.authenticatedUser.role}` })
})

protectedRouter.get('/manage/allUsers', authMiddleware, adminMiddleware, adminControllers.getUsers)
protectedRouter.put('/manage/createAdmin', authMiddleware, adminMiddleware, adminControllers.createAdmin)
protectedRouter.delete('/manage/deleteUser', authMiddleware, adminMiddleware, adminControllers.deleteUser)
