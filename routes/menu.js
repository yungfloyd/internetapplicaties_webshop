var express = require('express');
var router = express.Router();

// GET index page.
router.get('/', function(req, res, next) {
    res.render('index', {user :  req.user});
});

// GET contact page.
router.get('/contact', function(req, res, next) {
    res.render('contact', {user :  req.user});
});

// GET caddie page.
router.get('/winkelwagen', function(req, res, next) {
    res.render('winkelwagen', {user :  req.user});
});

// GET shirts page.
router.get('/shirts', function(req, res, next) {
    res.render('shirts', {user :  req.user});
});

// GET blue shirt page.
router.get('/shirtBlauw', function(req, res, next) {
    res.render('shirtBlauw', {user :  req.user});
});

// GET red shirt page.
router.get('/shirtRood', function(req, res, next) {
    res.render('shirtRood', {user :  req.user});
});

// GET black shirt page.
router.get('/shirtZwart', function(req, res, next) {
    res.render('shirtZwart', {user :  req.user});
});

// GET shorts page.
router.get('/shorts', function(req, res, next) {
    res.render('shorts', {user :  req.user});
});

// GET blue short page.
router.get('/shortBlauw', function(req, res, next) {
    res.render('shortBlauw', {user :  req.user});
});

// GET red short page.
router.get('/shortRood', function(req, res, next) {
    res.render('shortRood', {user :  req.user});
});

// GET black short page.
router.get('/shortZwart', function(req, res, next) {
    res.render('shortZwart', {user :  req.user});
});

// GET socks page.
router.get('/sokken', function(req, res, next) {
    res.render('sokken', {user :  req.user});
});

// GET blue socks page.
router.get('/sokkenBlauw', function(req, res, next) {
    res.render('sokkenBlauw', {user :  req.user});
});

// GET red socks page.
router.get('/sokkenRood', function(req, res, next) {
    res.render('sokkenRood', {user :  req.user});
});

// GET black socks page.
router.get('/sokkenZwart', function(req, res, next) {
    res.render('sokkenZwart', {user :  req.user});
});

// GET trainings page.
router.get('/trainings', function(req, res, next) {
    res.render('trainings', {user :  req.user});
});

// GET blue training page.
router.get('/trainingBlauw', function(req, res, next) {
    res.render('trainingBlauw', {user :  req.user});
});

// GET black training page.
router.get('/trainingZwart', function(req, res, next) {
    res.render('trainingZwart', {user :  req.user});
});


module.exports = router;