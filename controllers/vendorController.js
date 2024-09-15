// controllers/vendorController.js
const Vendor = require('../models/Vendor');

exports.getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.json(vendors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getVendorById = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    if (!vendor) return res.status(404).json({ message: 'Vendor not found' });
    res.json(vendor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addVendor = async (req, res) => {
  const { name, service, experience, contact, address } = req.body;

  try {
    const vendor = new Vendor({ name, service, experience, contact, address });
    await vendor.save();
    res.status(201).json({ message: 'Vendor added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
