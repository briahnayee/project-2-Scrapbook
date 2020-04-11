var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', (req, res, next) => {
  res.render('home')
});

router.get('/userProfile', (req, res, next) => {
  res.render('userProfile')
});

router.get('/createAccount', (req, res, next) => {
  res.render('createAccount')
});

router.get('/feed', (req, res, next) => {
  res.render('feed')
});

router.get('/home', (req, res, next) => {
  res.render('home')
});

router.get('/login', (req, res, next) => {
  res.render('login')
});

router.get('/singlePic/:id', (req, res, next) => {
  res.render('singlePic')
});


module.exports = router;
