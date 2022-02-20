const router = require('express').Router();
const controllers = require("../Controllers/authController.js");

router.get('/login',controllers.login_get);
router.get('/signin',controllers.signin_get);
router.post('/login',controllers.login_post);
router.post('/signin',controllers.signin_post);


module.exports = router