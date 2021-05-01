const sequelize = require('./sequelize')
const { DataTypes } = require('sequelize')
const ShoppingCartItem = require('./shoppingCartItem')
const LeavingMessage = require('./leavingMessage')
const Image = require('./image')

const Commodity = sequelize.define('Commodity', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    info: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    area: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT(10, 2),//总长度10位，小数点2位
        allowNull: false
    },
    mainImg: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sold: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    timestamps: true,
    updatedAt: false
})

// 商品:商品详情图片 1:M
Commodity.hasMany(Image, {
    foreignKey: {
        name: 'commodityId',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Image.belongsTo(Commodity, {
    foreignKey: {
        name: 'commodityId',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

// 商品:购物车物品 1:1
Commodity.hasOne(ShoppingCartItem, {
    foreignKey: {
        name: 'commodityId',
        allowNull: false
    }
})
ShoppingCartItem.belongsTo(Commodity, {
    foreignKey: {
        name: 'commodityId',
        allowNull: false
    }
})

// 商品:留言 1:M
Commodity.hasMany(LeavingMessage, {
    foreignKey: {
        name: 'commodityId',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
LeavingMessage.belongsTo(Commodity, {
    foreignKey: {
        name: 'commodityId',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

module.exports = Commodity