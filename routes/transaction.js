const router = require('express').Router()
const verifyToken = require('../middleware/verifyToken')
const Commodity = require('../model/commodity')
const Purchase = require('../model/purchase')
const Sale = require('../model/sale')

// 新增订单
router.post('/', verifyToken, async (req, res, next) => {
    try {
        // 将商品设为已卖出
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
            commodity.sold = true
            await commodity.save()
            // 买方订单
            await Purchase.create({
                commodityId: commodity.id,
                commodityTitle: commodity.title,
                commodityArea: commodity.area,
                commodityPrice: commodity.price,
                commodityMainImg: commodity.mainImg,
                addressName: req.body.name,
                addressPhone: req.body.phone,
                addressArea: req.body.area,
                addressDetail: req.body.detail,
                addressPostCode: req.body.postCode,
                userId: req.user.userId
            })
            // 卖方订单
            await Sale.create({
                commodityId: commodity.id,
                commodityTitle: commodity.title,
                commodityArea: commodity.area,
                commodityPrice: commodity.price,
                commodityMainImg: commodity.mainImg,
                addressName: req.body.name,
                addressPhone: req.body.phone,
                addressArea: req.body.area,
                addressDetail: req.body.detail,
                addressPostCode: req.body.postCode,
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

module.exports = router