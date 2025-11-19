const express = require('express')
const authRouter = require('./src/routes/auth')
const protectedRouter = require('./src/routes/admin')
const welcomeRouter = require('./src/routes/welcome')
const app = express()


app.use(express.json())
app.use('/auth', authRouter)
app.use('/admin', protectedRouter)
app.use(welcomeRouter)



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Servidor iniciado')
})