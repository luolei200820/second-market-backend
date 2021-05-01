const multer = require('multer')
const { nanoid } = require('nanoid')
const path = require('path')

const upload = multer({
    storage: multer.diskStorage({
        destination: path.join(__dirname, '../public'),
        filename: function (req, file, cb) {
            // 文件名称随机生成防止重复
            cb(null, nanoid() + '.jpg')
        }
    }),
    limits: {
        fileSize: 200 * 1024 // 文件大小限制200KB
    },
    fileFilter: function (req, file, cb) {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true)
        } else {
            cb(new Error("只支持拓展名为.jpg .jpeg .png的文件"))
        }
    }
})

module.exports = upload