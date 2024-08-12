const express = require("express");
const Reservation = require("../models/Restaurant");
const router = express.Router();
const { Op } = require("sequelize");

router.get("/reservations", async (req, res) => {
  const { location, dateTime, guests } = req.query;

  const reservations = await Reservation.findAll({
    where: {
      location: {
        [Op.like]: `%${location}%`,
      },
      dateTime: {
        [Op.lte]: dateTime,
      },
      guests: {
        [Op.gte]: guests,
      },
    },
  });

  res.json(reservations);
});

module.exports = router;
