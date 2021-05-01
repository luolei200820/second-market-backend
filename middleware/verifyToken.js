const jwt = require('express-jwt')
const config = require('../config.json')

module.exports = jwt({
    secret: config.tokenKey,
    algorithms: ['HS256']
})