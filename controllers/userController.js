var passport = require('passport');
var Gebruiker = require('../models/account');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(Gebruiker.authenticate()));
passport.serializeUser(Gebruiker.serializeUser());
passport.deserializeUser(Gebruiker.deserializeUser());

exports.login_get = function(req, res) {
    res.render('login', { user: req.user });
};

exports.login_post = [
    passport.authenticate('local'),
    function(req, res) {
        res.render('index');
    }
]

exports.logout_get = function(req, res) {
    req.logout();
    res.render('index');
};

exports.register_post = function(req, res) {
    Gebruiker.register(
        new Gebruiker({
            prename : req.body.prename,
            name : req.body.name,
            email : req.body.email,
            username : req.body.username,
        }), 
        req.body.password, 
        function(err, account) {
            if (err) {
                return res.render('login');
            }
        passport.authenticate('local')(req, res, function () {
            res.render('index');
        });
    });
}