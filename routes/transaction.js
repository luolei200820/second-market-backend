const router = require('express').Router()
const verifyToken = require('../middleware/verifyToken')
const Commodity = require('../model/commodity')
const Purchase = require('../model/purchase')
const Sale = require('../model/sale')

// 新增订单
router.post('/', verifyToken, async (req, res, next) => {
    try {
        // 查找该商品
        const commodity = await Commodity.findOne({
            where: {
                id: req.body.commodityId,
                sold: false
            }
        })

        if (commodity) {
            if (commodity.sold === true) {
                return res.json({
                    state: 0,
                    msg: '此商品已经卖出'
                })
            }
            if (commodity.userId === req.user.userId) {
                return res.json({
                    state: 0,
                    msg: '你不能买自己的商品'
                })
            }
            // 将商品设置为已卖出
            commodity.sold = true
            await commodity.save()
            // 买方订单
            await Purchase.create({
                commodityId: commodity.id,
                commodityTitle: commodity.title,
                commodityArea: commodity.area,
                commodityPrice: commodity.price,
                commodityMainImg: commodity.mainImg,
                addressName: req.body.address.name,
                addressPhone: req.body.address.phone,
                addressArea: req.body.address.area,
                addressDetail: req.body.address.detail,
                userId: req.user.userId
            })
            // 卖方订单
            await Sale.create({
                commodityId: commodity.id,
                commodityTitle: commodity.title,
                commodityArea: commodity.area,
                commodityPrice: commodity.price,
                commodityMainImg: commodity.mainImg,
                addressName: req.body.address.name,
                addressPhone: req.body.address.phone,
                addressArea: req.body.address.area,
                addressDetail: req.body.address.detail,
                userId: commodity.userId
            })
            res.json({
                state: 1
            })
        } else {
            res.json({
                state: 0,
                msg: '没有找到此商品或此商品已经卖出'
            })
        }
    } catch (err) {
        next(err)
    }
})

// 查看用户购买的商品
router.get('/purchase', verifyToken, async (req, res, next) => {
    try {
        const purchaseList = await Purchase.findAll({
            where: {
                userId: req.user.userId
            }
        })
        res.json({
            state: 1,
            purchaseList
        })
    } catch (err) {
        next(err)
    }
})

// 查看用户卖出的商品
router.get('/sale', verifyToken, async (req, res, next) => {
    try {
        const saleList = await Sale.findAll({
            where: {
                userId: req.user.userId
            }
        })
        res.json({
            state: 1,
            saleList
        })
    } catch (err) {
        next(err)
    }
})

module.exports = router