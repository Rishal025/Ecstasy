const router = require('express').Router();
const userController = require('../controllers/userController');


// router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

router.get('/sessions/:id', userController.getSession);

router.get('/profile/:id', userController.userProfile);

router.post('/edit-profile', userController.updateProfile);

router.post('/book_session', userController.bookSession);

router.get('/delete-user/:id', userController.deleteAccount);

router.post('/change-password', userController.changePassword);

router.get('/counselor_profile/:id', userController.counselorProfile);

module.exports = router;