const sequelize = require('./sequelize')
//const { DataTypes } = require('sequelize')

const ShoppingCartItem = sequelize.define('ShoppingCartItem', {

}, {
    timestamps: true,
    updatedAt: false
})

module.exports = ShoppingCartItem