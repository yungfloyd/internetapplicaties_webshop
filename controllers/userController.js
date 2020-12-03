var passport = require('passport');
var account = require('../models/account');

exports.login_get = function(req, res) {
    res.render('login', { user: req.user });
};

exports.login_post = [
    passport.authenticate('local'),
    function(req, res) {
        res.redirect('/');
    }
]

exports.logout_get = function(req, res) {
    req.logout();
    res.redirect('/');
};

exports.register_post = function(req, res) {
    account.register(
        new Gebruiker({
            prename : req.body.prename,
            name : req.body.name,
            email : req.body.email,
            username : req.body.username,
        }), 
        req.body.password, 
        function(err, account) {
            if (err) {
                return res.render('register', { account : account });
            }
        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
}