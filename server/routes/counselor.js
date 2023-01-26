const router = require('express').Router();
const counselor = require('../models/counselor')
const counselorController = require('../controllers/counselorController')

router.post('/timeSlot', counselorController.timeSlot);

router.get('/counselors', counselorController.counselorList);

module.exports = router;