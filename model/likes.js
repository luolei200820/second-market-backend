const sequelize = require('./sequelize')
const { DataTypes } = require('sequelize')
const User = require('./User')
const Commodity = require('./commodity')

const Likes = sequelize.define('Likes', {
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    commodityId: {
        type: DataTypes.INTEGER,
        references: {
            model: Commodity,
            key: 'id'
        }
    }
}, {
    timestamps: false
})

// 点赞 用户:商品 M:N
User.belongsToMany(Commodity, { through: 'Likes' })
Commodity.belongsToMany(User, { through: 'Likes' })

module.exports = Likes