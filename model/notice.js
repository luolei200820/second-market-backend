const sequelize = require('./sequelize')
const { DataTypes } = require('sequelize')

const Notice = sequelize.define('Notice', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    timestamps: true,
    updatedAt: false
})

module.exports = Notice