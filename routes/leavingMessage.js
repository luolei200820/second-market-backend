const router = require('express').Router()
const verifyToken = require('../middleware/verifyToken')
const LeavingMessage = require('../model/leavingMessage')
const User = require('../model/user')

// 添加留言
router.post('/add', verifyToken, async (req, res, next) => {
    try {
        await LeavingMessage.create({
            content: req.body.content,
            commodityId: req.body.commodityId,
            userId: req.user.userId
        })
        res.json({
            state: 1
        })
    } catch (err) {
        next(err)
    }
})

// 查看留言
router.get('/list', async (req, res, next) => {
    try {
        const messageList = await LeavingMessage.findAll({
            where: {
                commodityId: req.query.commodityId
            },
            include: {
                model: User,
                attributes: ['avatar', 'username']
            }
        })
        res.json({
            state: 1,
            messageList
        })
    } catch (err) {
        next(err)
    }
})

module.exports = router