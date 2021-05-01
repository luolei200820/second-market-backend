const sequelize = require('./sequelize')
const { DataTypes } = require('sequelize')
const Address = require('./address')
const Purchase = require('./purchase')
const Sale = require('./sale')
const Commodity = require('./commodity')
const ShoppingCartItem = require('./shoppingCartItem')
const LeavingMessage = require('./leavingMessage')
const Notice = require('./notice')

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            //支持英文、特殊符号、基本汉字 2-20
            is: /^[\x21-\x7E\u4E00-\u9FA5]{2,20}$/
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            //支持英文、数字、特殊符号 6-18
            is: /^[\x21-\x7E]{6,18}$/
        }
    },
    avatar: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            is: /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
        }
    },
    phone: {
        type: DataTypes.STRING,
        validate: {
            is: /^(13[0-9]|14[0-9]|15[0-9]|16[2|5|6|7]|17[0-9]|18[0-9]|19[0-9])\d{8}$/, //匹配国内电话号码
        }
    }
}, {
    timestamps: true,
    updatedAt: false
})

// 用户:收货地址 1:M
User.hasMany(Address, {
    foreignKey: {
        name: 'userId',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Address.belongsTo(User, {
    foreignKey: {
        name: 'userId',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

// 用户:购买记录 1:M
User.hasMany(Purchase, {
    foreignKey: {
        name: 'userId',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Purchase.belongsTo(User, {
    foreignKey: {
        name: 'userId',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

// 用户:卖出记录 1:M
User.hasMany(Sale, {
    foreignKey: {
        name: 'userId',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Sale.belongsTo(User, {
    foreignKey: {
        name: 'userId',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

// 用户:商品 1:M
User.hasMany(Commodity, {
    foreignKey: {
        name: 'userId',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Commodity.belongsTo(User, {
    foreignKey: {
        name: 'userId',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

// 用户:购物车物品 1:M
User.hasMany(ShoppingCartItem, {
    foreignKey: {
        name: 'userId',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
ShoppingCartItem.belongsTo(User, {
    foreignKey: {
        name: 'userId',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

// 用户:留言 1:M
User.hasMany(LeavingMessage, {
    foreignKey: {
        name: 'userId',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
LeavingMessage.belongsTo(User, {
    foreignKey: {
        name: 'userId',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

// 用户:通知 1:M
User.hasMany(Notice, {
    foreignKey: {
        name: 'userId',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Notice.belongsTo(User, {
    foreignKey: {
        name: 'userId',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

module.exports = User