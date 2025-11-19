

const adminMiddleware = (req, res, next) => {

    const user = req.authenticatedUser
    
    if (!user){
        return res.status(404).json({message: 'not found'})
    }

    if (user.role !== 'admin') {
        return res.status(403).json({ message: 'Not Authorized' })
    }
    else{
        next()
    }
}

module.exports = adminMiddleware