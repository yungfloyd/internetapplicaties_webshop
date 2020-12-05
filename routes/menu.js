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

// GET caddie page.
router.get('/winkelwagen', function(req, res, next) {
    res.render('winkelwagen');
});

// GET shirts page.
router.get('/shirts', function(req, res, next) {
    res.render('shirts');
});

// GET blue shirt page.
router.get('/shirtBlauw', function(req, res, next) {
    res.render('shirtBlauw');
});

// GET red shirt page.
router.get('/shirtRood', function(req, res, next) {
    res.render('shirtRood');
});

// GET black shirt page.
router.get('/shirtZwart', function(req, res, next) {
    res.render('shirtZwart');
});

// GET shorts page.
router.get('/shorts', function(req, res, next) {
    res.render('shorts');
});

// GET blue short page.
router.get('/shortBlauw', function(req, res, next) {
    res.render('shortBlauw');
});

// GET red short page.
router.get('/shortRood', function(req, res, next) {
    res.render('shortRood');
});

// GET black short page.
router.get('/shortZwart', function(req, res, next) {
    res.render('shortZwart');
});

// GET socks page.
router.get('/sokken', function(req, res, next) {
    res.render('sokken');
});

// GET blue socks page.
router.get('/sokkenBlauw', function(req, res, next) {
    res.render('sokkenBlauw');
});

// GET red socks page.
router.get('/sokkenRood', function(req, res, next) {
    res.render('sokkenRood');
});

// GET black socks page.
router.get('/sokkenZwart', function(req, res, next) {
    res.render('sokkenZwart');
});

// GET trainings page.
router.get('/trainings', function(req, res, next) {
    res.render('trainings');
});

// GET blue training page.
router.get('/trainingBlauw', function(req, res, next) {
    res.render('trainingBlauw');
});

// GET black training page.
router.get('/trainingZwart', function(req, res, next) {
    res.render('trainingZwart');
});


module.exports = router;