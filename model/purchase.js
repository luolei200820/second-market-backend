const sequelize = require('./sequelize')
const { DataTypes } = require('sequelize')

const Purchase = sequelize.define('Purchase', {
    commodityId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    commodityTitle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    commodityArea: {
        type: DataTypes.STRING,
        allowNull: false
    },
    commodityPrice: {
        type: DataTypes.FLOAT(10, 2),//总长度10位，小数点2位
        allowNull: false
    },
    commodityMainImg: {
        type: DataTypes.STRING,
        allowNull: false
    },
    addressName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    addressPhone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    addressArea: {
        type: DataTypes.STRING,
        allowNull: false
    },
    addressDetail: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    updatedAt: false
})

module.exports = Purchase