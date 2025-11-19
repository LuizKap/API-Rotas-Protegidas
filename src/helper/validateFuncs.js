

const isValidEmailMessage = (email) => {
    const isEmailValid = /^[a-zA-Z0-9._+]{3,30}@gmail\.com$/.test(email)
    const consecutivePoints = /\.\./g.test(email)
    const startsWithSpecialString = /^[^a-zA-Z0-9]/.test(email)

    let message = ''
    if (!isEmailValid) {
        message = 'email format must be: example123@gmail.com'
        return message
    }

    if (consecutivePoints) {
        message = 'email can`t have two consecutive points: ".."'
        return message
    }

    if (startsWithSpecialString){
        message = 'email can`t start with special characters'
        return message
    }
    
}

const isEmailRegistered = (email, users) => {
    const boolean = users.find(user => user.email === email)

    return boolean
}

module.exports = {isValidEmailMessage, isEmailRegistered}