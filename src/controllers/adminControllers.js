
const users = require('../model/users')


const adminControllers = {

    
    getUsers: (req, res) => {

        return res.json({ users })

    },

   
    createAdmin: (req, res) => {
        const { email } = req.body

        const user = users.find(user => user.email === email)
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        user.role = 'admin'
        return res.status(200).json({ user , message: `${user.name} is now admin`})
    },


    deleteUser: (req, res) => {
        const { email } = req.body

        const userIndex = users.findIndex(user => user.email === email)
        if (userIndex === -1) {
            return res.status(404).json({ message: 'User not found' })
        }
        users.splice(userIndex, 1)
        return res.status(200).json({ message: 'Usuário deletado com sucesso' })
    }

}

module.exports = adminControllers