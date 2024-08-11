const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Reservation = sequelize.define('Reservation', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    dateTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    guests: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

module.exports = Reservation;
