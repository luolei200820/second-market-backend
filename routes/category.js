const router = require('express').Router()
const upload = require('../middleware/upload')
const verifyToken = require('../middleware/verifyToken')
const deleteFile = require('../utils/deleteFile')
const Category = require('../model/category')

// 添加分类
router.post('/add', verifyToken, upload.single('image'), async (req, res, next) => {
    try {
        if (!req.user.adminId) {
            return res.json({
                state: 0,
                msg: '你不是管理员'
            })
        }
        await Category.create({
            name: req.body.name,
            image: req.file.filename
        })
        res.json({
            state: 1
        })
    } catch (err) {
        next(err)
    }
})

// 删除分类
router.post('/delete', verifyToken, async (req, res, next) => {
    try {
        if (!req.user.adminId) {
            return res.json({
                state: 0,
                msg: '你不是管理员'
            })
        }
        const category = await Category.findByPk(req.body.id)
        if (category) {
            await category.destroy()
            res.json({
                state: 1
            })
        } else {
            res.json({
                state: 0,
                msg: '没有找到此分类'
            })
        }
    } catch (err) {
        next(err)
    }
})

// 编辑分类
router.post('/edit', verifyToken, upload.single('image'), async (req, res, next) => {
    try {
        if (!req.user.adminId) {
            return res.json({
                state: 0,
                msg: '你不是管理员'
            })
        }
        const category = await Category.findByPk(req.body.id)
        if (category) {
            category.name = req.body.name
            // 如果修改了分类图片
            if (req.file) {
                deleteFile(category.image)
                category.image = req.file.filename
            }
            await category.save()
            res.json({
                state: 1
            })
        } else {
            res.json({
                state: 0,
                msg: '没有找到此分类'
            })
        }
    } catch (err) {
        next(err)
    }
})

// 分类列表
router.get('/list', async (req, res, next) => {
    try {
        const categories = await Category.findAll()
        res.json({
            state: 1,
            categories
        })
    } catch (err) {
        next(err)
    }
})

module.exports = router