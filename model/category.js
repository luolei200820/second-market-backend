const sequelize = require('./sequelize')
const { DataTypes } = require('sequelize')
const Commodity = require('./commodity')

const Category = sequelize.define('Category', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

// 分区:商品 1:M
Category.hasMany(Commodity, {
    foreignKey: {
        name: 'categoryId',
        allowNull: false
    }
})
Commodity.belongsTo(Category, {
    foreignKey: {
        name: 'categoryId',
        allowNull: false
    }
})

module.exports = Category