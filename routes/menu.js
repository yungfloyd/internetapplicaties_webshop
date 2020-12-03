var express = require('express');
var router = express.Router();

// GET index page.
router.get('/', function(req, res, next) {
    res.render('index');
});

// GET contact page.
router.get('/contact', function(req, res, next) {
    res.render('contact');
});

// GET boeken page.
router.get('/boeken', function(req, res, next) {
    res.render('boeken');
});

module.exports = router;