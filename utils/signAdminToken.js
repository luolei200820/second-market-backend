const jsonwebtoken = require('jsonwebtoken')
const config = require('../config.json')

module.exports = (adminId) => {
    return jsonwebtoken.sign(
        { adminId },
        config.tokenKey,
        { expiresIn: '2 days' }
    )
}