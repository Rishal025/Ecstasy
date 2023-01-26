const router = require('express').Router();
const adminController = require('../controllers/adminController');


router.post('/add_specs', adminController.addSpecs);

router.get('/view_specs', adminController.viewSpecs);

router.get('/counselor_req' , adminController.counselorReq );

router.delete('/delete_specs/:id', adminController.deleteSpec);

router.put('/reject_counselor/:id', adminController.rejectCounselor);

router.get('/counselor_details/:id',adminController.counselorDetails);

router.put('/approve_counselor/:id', adminController.approveCounselor);

router.get('/getAllUsers', adminController.getAllUsers);

router.put('/block-user/:userId', adminController.blockUser);

router.put('/unblock-user/:userId', adminController.unBlockUser);

router.get('/all-counselors', adminController.getAllCounselors);

 module.exports = router;



