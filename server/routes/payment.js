const router = require('express').Router();
const paymentController = require('../controllers/paymentController')


router.post('/orders', paymentController.order);

router.post('/verify', paymentController.verifyPayment);

module.exports = router;