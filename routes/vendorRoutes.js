// routes/vendorRoutes.js
const express = require('express');
const router = express.Router();
const { getAllVendors, getVendorById, addVendor } = require('../controllers/vendorController');

router.get('/', getAllVendors);
router.get('/:id', getVendorById);
router.post('/', addVendor);

module.exports = router;
