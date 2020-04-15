var express = require('express');
var router = require('express').Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/feed',
    failureRedirect : '/home'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/home');
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

router.get('/newPhoto', (req, res, next) => {
  res.render('newPhoto')
});


module.exports = router;
