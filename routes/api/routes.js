const router = require('express').Router();
const controller = require('../../controller/controller');

router.route('/')
    .get(controller.get)
    .post(controller.upload);


module.exports = router;