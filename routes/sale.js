const router = require('express').Router()
const verifyToken = require('../middleware/verifyToken')
const Sale = require('../model/sale')

// 卖出记录列表
router.get('/list', verifyToken, async (req, res, next) => {
    try {
        const saleList = await Sale.findAll({
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
            saleList
        })
    } catch (err) {
        next(err)
    }
})

// 卖出记录详情
router.get('/:id', verifyToken, async (req, res, next) => {
    try {
        const sale = await Sale.findOne({
            where: {
                id: req.params.id,
                userId: req.user.userId
            }
        })
        if (sale) {
            res.json({
                state: 1,
                sale
            })
        } else {
            res.json({
                state: 0,
                msg: '没有找到此卖出记录'
            })
        }
    } catch (err) {
        next(err)
    }
})

// 删除卖出记录
router.post('/delete', verifyToken, async (req, res, next) => {
    try {
        const sale = await Sale.findOne({
            where: {
                id: req.body.id,
                userId: req.user.userId
            }
        })
        if (sale) {
            await sale.destroy()
            res.json({
                state: 1
            })
        } else {
            res.json({
                state: 0,
                msg: '没有找到此卖出记录'
            })
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router