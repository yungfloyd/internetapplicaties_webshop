var express = require('express');
var router = express.Router();

// GET index page.
router.get('/', function(req, res, next) {
    res.render('index', {title : "testt", user : req.user});
});

// GET contact page.
router.get('/contact', function(req, res, next) {
    res.render('contact', {user : req.user});
});

// GET boeken page.
router.get('/boeken', function(req, res, next) {
    res.render('boeken', {user : req.user});
});

module.exports = router;