const router = require('express').Router()
const verifyToken = require('../middleware/verifyToken')
const Purchase = require('../model/purchase')

// 购买记录列表
router.get('/list', verifyToken, async (req, res, next) => {
    try {
        const purchaseList = await Purchase.findAll({
            where: {
                userId: req.user.userId
            },
            attributes: [
                'commodityId',
                'commodityTitle',
                'commodityArea',
                'commodityPrice',
                'commodityMainImg'
            ]
        })
        res.json({
            state: 1,
            purchaseList
        })
    } catch (err) {
        next(err)
    }
})

// 购买记录详情
router.get('/:id', verifyToken, async (req, res, next) => {
    try {
        const purchase = await Purchase.findOne({
            where: {
                id: req.params.id,
                userId: req.user.userId
            }
        })
        if (purchase) {
            res.json({
                state: 1,
                purchase
            })
        } else {
            res.json({
                state: 0,
                msg: '没有找到此购买记录'
            })
        }
    } catch (err) {
        next(err)
    }
})

// 删除购买记录
router.post('/delete', verifyToken, async (req, res, next) => {
    try {
        const purchase = await Purchase.findOne({
            where: {
                id: req.body.id,
                userId: req.user.userId
            }
        })
        if (purchase) {
            await purchase.destroy()
            res.json({
                state: 1
            })
        } else {
            res.json({
                state: 0,
                msg: '没有找到此购买记录'
            })
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router