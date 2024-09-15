// models/Vendor.js
const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  service: { type: String, required: true },
  experience: { type: Number, required: true },
  contact: { type: String, required: true },
  address: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Vendor', VendorSchema);
