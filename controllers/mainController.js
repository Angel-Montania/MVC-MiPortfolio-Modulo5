const path = require('path')

let dir = path.resolve(__dirname, '../views/home.html')
console.log(dir)

let controller = {
    index: (req, res) => {
        res.type('html').sendFile(path.resolve(__dirname, '../views/home.html'))
    }
}



module.exports = controller