const router = require('express').Router()
const verifyToken = require('../middleware/verifyToken')
const Address = require('../model/address')

// 添加收货地址
router.post('/add', verifyToken, async (req, res, next) => {
    try {
        await Address.create({
            name: req.body.name,
            phone: req.body.phone,
            area: req.body.area,
            detail: req.body.detail,
            postCode: req.body.postCode,
            userId: req.user.userId
        })
        res.json({
            state: 1
        })
    } catch (err) {
        next(err)
    }
})

// 删除收货地址
router.post('/delete', verifyToken, async (req, res, next) => {
    try {
        const address = await Address.findOne({
            where: {
                id: req.body.id,
                userId: req.user.userId
            }
        })
        if (address) {
            await address.destroy()
            res.json({
                state: 1
            })
        } else {
            res.json({
                state: 0,
                msg: '没有找到此地址或此地址不属于此用户'
            })
        }
    } catch (err) {
        next(err)
    }
})

// 编辑收货地址
router.post('/edit', verifyToken, async (req, res, next) => {
    try {
        const address = await Address.findOne({
            where: {
                id: req.body.id,
                userId: req.user.userId
            }
        })
        if (address) {
            address.name = req.body.name
            address.phone = req.body.phone
            address.area = req.body.area
            address.detail = req.body.detail
            address.postCode = req.body.postCode
            await address.save()
            res.json({
                state: 1
            })
        } else {
            res.json({
                state: 0,
                msg: '没有找到此地址或此地址不属于此用户'
            })
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router