const router = require('express').Router()
const signToken = require('../utils/signToken')
const verifyToken = require('../middleware/verifyToken')
const User = require('../model/user')
const upload = require('../middleware/upload')
const deleteFile = require('../utils/deleteFile')

// 用户登录
router.post('/login', async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: {
                username: req.body.username,
                password: req.body.password
            },
            attributes: { exclude: 'password' }
        })
        if (user) {
            const token = 'Bearer ' + signToken(user.id)
            res.json({
                state: 1,
                token,
                user
            })
        } else {
            res.json({
                state: 0,
                msg: '用户名或密码错误'
            })
        }
    } catch (err) {
        next(err)
    }
})

// 用户注册
router.post('/regist', async (req, res, next) => {
    try {
        // 检查用户名是否被注册
        if (await User.findOne({
            where: {
                username: req.body.username
            }
        })) {
            return res.json({
                state: 0,
                msg: '此用户名已经被注册了'
            })
        }
        // 注册用户
        const user = await User.create({
            username: req.body.username,
            password: req.body.password
        })
        user.password = undefined
        const token = 'Bearer ' + signToken(user.id)
        res.json({
            state: 1,
            token,
            user
        })
    } catch (err) {
        next(err)
    }
})

// 自动登录
router.post('/auto-login', verifyToken, async (req, res, next) => {
    try {
        const user = await User.findByPk(req.user.userId, {
            attributes: { exclude: 'password' }
        })
        if (user) {
            res.json({
                state: 1,
                user
            })
        } else {
            res.json({
                state: 0,
                msg: '用户不存在'
            })
        }
    } catch (err) {
        next(err)
    }
})

// 修改用户信息
router.post('/edit', verifyToken, async (req, res, next) => {
    try {
        const user = await User.findByPk(req.user.userId)
        if (user) {
            // 如果修改了用户名
            if (user.username !== req.body.username) {
                // 检查用户名是否被注册
                if (await User.findOne({
                    username: req.body.username
                })) {
                    return res.json({
                        state: 0,
                        msg: '此用户名已经被注册了'
                    })
                } else {
                    user.username = req.body.username
                }
            }
            user.email = req.body.email
            user.phone = req.body.phone
            await user.save()
            res.json({
                state: 1
            })
        } else {
            res.json({
                state: 0,
                msg: '没有找到此用户'
            })
        }
    } catch (err) {
        next(err)
    }
})

// 修改头像
router.post('/edit-avatar', verifyToken, upload.single('avatar'), async (req, res) => {
    try {
        const user = await User.findByPk(req.user.userId)
        if (user) {
            if (req.file) {
                // 将之前的头像删除
                if (user.avatar) deleteFile(user.avatar)
                // 修改数据
                user.avatar = req.file.filename
                await user.save()
                res.json({
                    state: 1
                })
            } else {
                res.json({
                    state: 0,
                    msg: '没有上传头像'
                })
            }
        } else {
            res.json({
                state: 0,
                msg: '没有找到此用户'
            })
        }
    } catch (err) {
        next(err)
    }
})

// 修改密码
router.post('/change-password', verifyToken, async (req, res, next) => {
    try {
        const user = await User.findByPk(req.user.userId)
        if (user) {
            if (user.password === req.body.oldPassword) {
                user.password = req.body.newPassword
                await user.save()
                res.json({
                    state: 1
                })
            } else {
                res.json({
                    state: 0,
                    msg: '旧密码不正确'
                })
            }
        } else {
            res.json({
                state: 0,
                msg: '没有找到此用户'
            })
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router