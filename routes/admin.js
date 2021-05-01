const router = require('express').Router()
const config = require('../config.json')
const signAdminToken = require('../utils/signAdminToken')
const verifyToken = require('../middleware/verifyToken')
const upload = require('../middleware/upload')
const Admin = require('../model/admin')

// 管理员登录
router.post('/login', async (req, res, next) => {
    try {
        const admin = await Admin.findOne({
            where: {
                username: req.body.username,
                password: req.body.password
            },
            attributes: { exclude: 'password' }
        })
        if (admin) {
            const token = 'Bearer ' + signAdminToken(admin.id)
            res.json({
                state: 1,
                token,
                admin
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

// 管理员注册
router.post('/regist', async (req, res, next) => {
    try {
        // 检查用户名是否被注册
        if (await Admin.findOne({
            username: req.body.username
        })) {
            return res.json({
                state: 0,
                msg: '此用户名已经被注册了'
            })
        }
        if (req.body.adminRegistKey !== config.adminRegistKey) {
            return res.json({
                state: 0,
                msg: '管理员注册密码不正确'
            })
        }
        // 注册管理员
        const admin = await Admin.create({
            username: req.body.username,
            password: req.body.password
        })
        admin.password = undefined
        const token = 'Bearer ' + signAdminToken(admin.id)
        res.json({
            state: 1,
            token,
            admin
        })
    } catch (err) {
        next(err)
    }
})

// 自动登录
router.post('/auto-login', verifyToken, async (req, res, next) => {
    try {
        const admin = await Admin.findByPk(req.user.adminId, {
            attributes: { exclude: 'password' }
        })
        if (admin) {
            res.json({
                state: 1,
                admin
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
        const admin = await Admin.findByPk(req.user.adminId)
        if (admin) {
            // 如果修改了用户名
            if (admin.username !== req.body.username) {
                // 检查用户名是否被注册
                if (await Admin.findOne({
                    username: req.body.username
                })) {
                    return res.json({
                        state: 0,
                        msg: '此用户名已经被注册了'
                    })
                } else {
                    admin.username = req.body.username
                }
            }
            admin.email = req.body.email
            admin.phone = req.body.phone
            await admin.save()
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
        const admin = await Admin.findByPk(req.user.adminId)
        if (admin) {
            if (req.file) {
                // 将之前的头像删除
                if (admin.avatar) deleteFile(admin.avatar)
                // 修改数据
                admin.avatar = req.file.filename
                await admin.save()
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
        const admin = await Admin.findByPk(req.user.adminId)
        if (admin) {
            if (admin.password === req.body.oldPassword) {
                admin.password = req.body.newPassword
                await admin.save()
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