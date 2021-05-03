const router = require('express').Router()
const verifyToken = require('../middleware/verifyToken')
const Address = require('../model/address')

// 添加收货地址
router.post('/add', verifyToken, async (req, res, next) => {
    try {
        if (req.body.address.default) {
            // 如果新添加的收货地址设为默认地址，则把之前的地址设为非默认
            const addressList = await Address.findAll({
                where: {
                    userId: req.user.userId
                }
            })
            addressList.forEach(async item => {
                item.default = false
                await item.save()
            })
        }
        await Address.create({
            name: req.body.address.name,
            phone: req.body.address.phone,
            area: req.body.address.area,
            detail: req.body.address.detail,
            default: req.body.address.default,
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
        if (req.body.address.default) {
            // 如果新添加的收货地址设为默认地址，则把之前的地址设为非默认
            const addressList = await Address.findAll({
                where: {
                    userId: req.user.userId
                }
            })
            addressList.forEach(async item => {
                item.default = false
                await item.save()
            })
        }
        const address = await Address.findOne({
            where: {
                id: req.body.address.id,
                userId: req.user.userId
            }
        })
        if (address) {
            address.name = req.body.address.name
            address.phone = req.body.address.phone
            address.area = req.body.address.area
            address.detail = req.body.address.detail
            address.default = req.body.address.default
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

// 查看收货地址
router.get('/list', verifyToken, async (req, res, next) => {
    try {
        const addressList = await Address.findAll({
            where: {
                userId: req.user.userId
            }
        })
        res.json({
            state: 1,
            addressList
        })
    } catch (err) {
        next(err)
    }
})

// 查看某个收货地址
router.get('/:id', verifyToken, async (req, res, next) => {
    try {
        const address = await Address.findOne({
            where: {
                id: req.params.id,
                userId: req.user.userId
            }
        })
        res.json({
            state: 1,
            address
        })
    } catch (err) {
        next(err)
    }
})

module.exports = router