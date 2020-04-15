var express = require('express');
var router = express.Router();
const photosCtrl = require('../controllers/photos');

router.post('/', photosCtrl.create);

module.exports = router;