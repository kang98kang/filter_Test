const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const reservationRoutes = require('./routes/reservations');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', reservationRoutes);

sequelize.sync().then(() => {
    app.listen(8000, () => {
        console.log('Server is running on port 8000');
    });
});
