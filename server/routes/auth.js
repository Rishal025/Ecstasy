const router = require('express').Router();
const authController = require('../controllers/authController');
const logoutController = require('../controllers/logoutController');


router.post('/signup', authController.userSignup);

router.post('/login', authController.userLogin);

router.post('/admin_login', authController.adminLogin);

router.post('/counselor_reg', authController.counselorRegistration);

router.post('/counselor/login', authController.counselorLogin);

router.get('/logout', logoutController.handleLogout);

module.exports = router;