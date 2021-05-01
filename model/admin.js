const sequelize = require('./sequelize')
const { DataTypes } = require('sequelize')

const Admin = sequelize.define('Admin', {
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
    timestamps: false
})

module.exports = Admin