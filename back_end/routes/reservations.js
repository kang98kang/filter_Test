const express = require('express');
const Reservation = require('../models/Reservation');
const router = express.Router();
const { Op } = require('sequelize');

router.get('/reservations', async (req, res) => {
    const { location, dateTime, guests } = req.query;

    const reservations = await Reservation.findAll({
        where: {
            location: {
                [Op.like]: `%${location}%`
            },
            dateTime: {
                [Op.eq]: dateTime
            },
            guests: {
                [Op.lte]: guests
            }
        }
    });

    res.json(reservations);
});

module.exports = router;
