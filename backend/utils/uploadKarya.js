const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../files/karya'));
    },
    filename: function (req, file, cb) {
        const hash = crypto.createHash('sha256').update(Date.now().toString() + file.originalname).digest('hex');
        const extension = path.extname(file.originalname).toLowerCase();
        cb(null, hash + extension);
    }
});

const upload = multer({ storage: storage });

module.exports = upload;