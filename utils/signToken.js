const jsonwebtoken = require('jsonwebtoken')
const config = require('../config.json')

module.exports = (userId) => {
    return jsonwebtoken.sign(
        { userId },
        config.tokenKey,
        { expiresIn: '2 days' }
    )
}