const router = require('express').Router();
const controller = require('../../controller/controller');
const multer = require('multer');
const upload = multer({ dest: '/uploads' });

router.route('/')
    .get(controller.get);
router.route('/provider1')
    .post(upload.any(), controller.uploadToDB);
router.route('/provider2')
    .post(controller.uploadToFS);

router.route('/provider3')
    .post(controller.uploadToConsole)

module.exports = router;