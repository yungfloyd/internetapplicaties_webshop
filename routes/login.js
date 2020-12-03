var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController.js');

/* GET login page. */
router.get('/login', userController.login_get);

router.post('/login', userController.login_post);

router.get('/logout', userController.logout_get);

router.post('/register', userController.register_post);

module.exports = router;