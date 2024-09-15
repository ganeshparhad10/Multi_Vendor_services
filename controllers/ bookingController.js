// controllers/bookingController.js
const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  const { vendorId, service, date } = req.body;

  try {
    const booking = new Booking({
      user: req.user,
      vendor: vendorId,
      service,
      date
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user }).populate('vendor');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
