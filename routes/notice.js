const router = require('express').Router()
const verifyToken = require('../middleware/verifyToken')
const Notice = require('../model/notice')

// 通知列表
router.get('/list', verifyToken, async (req, res, next) => {
    try {
        const noticeList = await Notice.findAll({
            where: {
                userId: req.user.userId
            }
        })
        res.json({
            state: 1,
            noticeList
        })
    } catch (err) {
        next(err)
    }
})

// 查看通知
router.get('/:id', verifyToken, async (req, res, next) => {
    try {
        const notice = await Notice.findOne({
            where: {
                id: req.params.id,
                userId: req.user.userId
            }
        })
        if (notice) {
            res.json({
                state: 1,
                notice
            })
        } else {
            res.json({
                state: 0,
                msg: '没有找到此通知'
            })
        }
    } catch (err) {
        next(err)
    }
})

// 发送通知
router.post('/add', verifyToken, async (req, res, next) => {
    try {
        if (!req.user.adminId) {
            return res.json({
                state: 0,
                msg: '你不是管理员'
            })
        }
        const notice = await Notice.create({
            content: req.body.content,
            userId: req.body.userId
        })
        res.json({
            state: 1
        })
    } catch (err) {
        next(err)
    }
})

// 删除通知
router.post('/delete', verifyToken, async (req, res, next) => {
    try {
        const notice = await Notice.findOne({
            where: {
                id: req.body.id,
                userId: req.user.userId
            }
        })
        if (notice) {
            await notice.destroy()
            res.json({
                state: 1
            })
        } else {
            res.json({
                state: 0,
                msg: '没有找到此通知'
            })
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router