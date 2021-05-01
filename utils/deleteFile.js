const fs = require('fs')
const path = require('path')

module.exports = (filename) => {
    if (!filename) return
    const filePath = path.join(__dirname, '../public', filename)
    fs.unlink(filePath, (err) => {
        if (err) console.error(err)
        console.log(`删除文件：${filePath}`)
    })
}