const router = require('express').Router()
const { Op } = require('sequelize')
const verifyToken = require('../middleware/verifyToken')
const upload = require('../middleware/upload')
const deleteFile = require('../utils/deleteFile')
const Commodity = require('../model/commodity')
const Category = require('../model/category')
const User = require('../model/user')
const Image = require('../model/image')
const LeavingMessage = require('../model/leavingMessage')

// 添加商品
router.post('/add', verifyToken, upload.fields([
    { name: 'mainImg', maxCount: 1 },
    { name: 'detailImgs', maxCount: 6 }
]), async (req, res, next) => {
    try {
        const commodity = await Commodity.create({
            title: req.body.title,
            info: req.body.info,
            area: req.body.area,
            price: req.body.price,
            mainImg: req.files['mainImg'][0].filename,
            categoryId: req.body.categoryId,
            userId: req.user.userId
        })

        if (req.files['detailImgs']) {
            // 如果有详情图片
            await Image.bulkCreate(
                req.files['detailImgs'].map(file => {
                    return {
                        filename: file.filename,
                        commodityId: commodity.id
                    }
                })
            )
        }

        res.json({
            state: 1
        })
    } catch (err) {
        next(err)
    }
})

// 删除商品
router.post('/delete', verifyToken, async (req, res, next) => {
    try {
        const commodity = await Commodity.findOne({
            where: {
                id: req.body.id,
                userId: req.user.userId
            }
        })
        if (commodity) {
            // 删除详情图片
            const images = await commodity.getImages()
            images.forEach(async image => {
                deleteFile(image.filename)
                await image.destroy()
            })
            // 删除商品主图
            deleteFile(commodity.mainImg)
            // 删除商品
            await commodity.destroy()
            res.json({
                state: 1
            })
        } else {
            res.json({
                state: 0,
                msg: '没有找到此商品'
            })
        }
    } catch (err) {
        next(err)
    }
})

// 管理员删除商品
router.post('/admin-delete', verifyToken, async (req, res, next) => {
    try {
        if (!req.user.adminId) {
            return res.json({
                state: 0,
                msg: '你不是管理员'
            })
        }
        const commodity = await Commodity.findByPk(req.body.id)
        if (commodity) {
            // 删除详情图片
            const images = await commodity.getImages()
            images.forEach(async image => {
                deleteFile(image.filename)
                await image.destroy()
            })
            // 删除商品主图
            deleteFile(commodity.mainImg)
            // 删除商品
            await commodity.destroy()
            res.json({
                state: 1
            })
        } else {
            res.json({
                state: 0,
                msg: '没有找到此商品'
            })
        }
    } catch (err) {
        next(err)
    }
})

// 编辑商品
router.post('/edit', verifyToken, upload.fields([
    { name: 'mainImg', maxCount: 1 },
    { name: 'detailImgs', maxCount: 6 }
]), async (req, res, next) => {
    try {
        const commodity = await Commodity.findOne({
            where: {
                id: req.body.id,
                userId: req.user.userId
            },
        })

        if (commodity) {
            // 获取现在商品的详情图片
            const images = await commodity.getImages()
            commodity.title = req.body.title
            commodity.info = req.body.info
            commodity.price = req.body.price
            // 如果修改了主图
            if (req.files['mainImg']) {
                deleteFile(commodity.mainImg)
                commodity.mainImg = req.files['mainImg'][0].filename
            }
            // 如果添加了新的详情图片
            if (req.files['detailImgs']) {
                await Image.bulkCreate(
                    req.files['detailImgs'].map(file => {
                        return {
                            filename: file.filename,
                            commodityId: commodity.id
                        }
                    })
                )
            }
            // 如果删除了之前的详情图片
            images.forEach(async image => {
                // 删完了
                if (!req.body.detailImgs) {
                    deleteFile(image.filename)
                    await image.destroy()
                }
                // 还有一部分
                else if (!req.body.detailImgs.includes(image.filename)) {
                    deleteFile(image.filename)
                    await image.destroy()
                }
            })
            await commodity.save()
            res.json({
                state: 1
            })
        } else {
            res.json({
                state: 0,
                msg: '没有找到此商品'
            })
        }
    } catch (err) {
        next(err)
    }
})

// 商品搜索
router.post('/search', async (req, res, next) => {
    try {
        const commodities = await Commodity.findAll({
            where: {
                title: {
                    [Op.substring]: req.body.title
                }
            },
            include: {
                model: User,
                attributes: ['username', 'avatar']
            },
            attributes: { exclude: ['info', 'categoryId', 'userId'] }
        })
        res.json({
            state: 1,
            commodities
        })
    } catch (err) {
        next(err)
    }
})

// 商品列表
router.get('/list', async (req, res, next) => {
    try {
        const commodities = await Commodity.findAll({
            include: {
                model: User,
                attributes: ['username', 'avatar']
            },
            attributes: { exclude: ['info', 'categoryId', 'userId'] }
        })
        res.json({
            state: 1,
            commodities
        })
    } catch (err) {
        next(err)
    }
})

// 获取分类商品
router.get('/category', async (req, res, next) => {
    try {
        const categoryId = req.query.id
        const commodities = await Commodity.findAll({
            where: {
                categoryId
            },
            include: {
                model: User,
                attributes: ['username', 'avatar']
            },
            attributes: { exclude: ['info', 'categoryId', 'userId'] }
        })
        res.json({
            state: 1,
            commodities
        })
    } catch (err) {
        next(err)
    }
})

// 查看用户发布的商品
router.get('/user-upload', verifyToken, async (req, res, next) => {
    try {
        const commodities = await Commodity.findAll({
            where: {
                userId: req.user.userId
            }
        })
        res.json({
            state: 1,
            commodities
        })
    } catch (err) {
        next(err)
    }
})

// 查看商品
router.get('/:id', async (req, res, next) => {
    try {
        const commodity = await Commodity.findByPk(req.params.id, {
            include: [
                {
                    model: Image,
                    attributes: ['id', 'filename']
                },
                {
                    model: Category,
                    attributes: ['name']
                },
                {
                    model: User,
                    attributes: ['username', 'avatar']
                },
                {
                    model: LeavingMessage,
                    include: {
                        model: User,
                        attributes: ['avatar', 'username']
                    },
                    limit: 2
                }
            ]
        })
        if (commodity) {
            res.json({
                state: 1,
                commodity
            })
        } else {
            res.json({
                state: 0,
                msg: '没有找到此商品'
            })
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router