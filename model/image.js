const sequelize = require('./sequelize')
const { DataTypes } = require('sequelize')

const Image = sequelize.define('Image', {
    filename: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Image