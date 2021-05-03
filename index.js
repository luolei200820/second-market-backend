'use strict'
const config = require('./config.json')
const express = require('express')
const compression = require('compression')
const cors = require('cors')
const sequelize = require('./model/sequelize')
const fs = require('fs')

// 创建上传目录
try {
    fs.accessSync('public')
} catch (err) {
    console.log('public文件夹不存在')
    fs.mkdirSync('public')
    console.log('public文件夹创建成功')
}

// Express
const app = express()
app.use(cors())
app.use(compression())
app.use(express.json())
// routes
app.use('/public', express.static('./public'))
app.use('/address', require('./routes/address'))
app.use('/admin', require('./routes/admin'))
app.use('/category', require('./routes/category'))
app.use('/commodity', require('./routes/commodity'))
app.use('/notice', require('./routes/notice'))
app.use('/purchase', require('./routes/purchase'))
app.use('/sale', require('./routes/sale'))
app.use('/shoppingCart', require('./routes/shoppingCart'))
app.use('/transaction', require('./routes/transaction'))
app.use('/user', require('./routes/user'))
app.use('/leavingMessage', require('./routes/leavingMessage'))

// global error handler
app.use((err, req, res, next) => {
    res.json({
        state: 0,
        msg: err.message
    })
    console.error(req.url + '\n' + err.message)
});

(async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        console.log('数据库连接建立成功')
        app.listen(config.port, () => {
            console.log(`server listen on port ${config.port}`)
        })
    } catch (error) {
        console.error('数据库连接建立失败', error)
    }
})()