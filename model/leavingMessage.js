const sequelize = require('./sequelize')
const { DataTypes } = require('sequelize')

const LeavingMessage = sequelize.define('LeavingMessage', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    timestamps: true,
    updatedAt: false
})

module.exports = LeavingMessage