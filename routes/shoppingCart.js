const router = require('express').Router()
const verifyToken = require('../middleware/verifyToken')
const Commodity = require('../model/commodity')
const ShoppingCartItem = require('../model/shoppingCartItem')

// 购物车商品列表
router.get('/list', verifyToken, async (req, res, next) => {
    try {
        const shoppingCartItemList = await ShoppingCartItem.findAll({
            where: {
                userId: req.user.userId
            },
            include: {
                model: Commodity,
                attributes: ['id', 'mainImg', 'title', 'price']
            }
        })
        res.json({
            state: 1,
            shoppingCartItemList
        })
    } catch (err) {
        next(err)
    }
})

// 添加购物车物品
router.post('/add', verifyToken, async (req, res, next) => {
    try {
        if (await ShoppingCartItem.findOne({
            where: {
                userId: req.user.userId,
                commodityId: req.body.commodityId
            }
        })) {
            return res.json({
                state: 0,
                msg: '此商品已经添加到购物车了'
            })
        }
        const shoppingCartItem = await ShoppingCartItem.create({
            userId: req.user.userId,
            commodityId: req.body.commodityId
        })
        res.json({
            state: 1,
            shoppingCartItem
        })
    } catch (err) {
        next(err)
    }
})

// 删除购物车物品
router.post('/delete', verifyToken, async (req, res, next) => {
    try {
        const shoppingCartItem = await ShoppingCartItem.findOne({
            where: {
                id: req.body.id,
                userId: req.user.userId
            }
        })
        if (shoppingCartItem) {
            await shoppingCartItem.destroy()
            res.json({
                state: 1
            })
        } else {
            res.json({
                state: 0,
                msg: '没有找到此物品'
            })
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router