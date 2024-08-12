const Reservation = require("./models/Restaurant");
const sequelize = require("./config/database");

sequelize
  .sync({ force: true })
  .then(async () => {
    await Reservation.create({
      name: "서울 회식1",
      location: "서울",
      price: 25000,
      dateTime: "2024-08-11T10:00:00",
      guests: 6,
      imageUrl: "http://example.com/image1.jpg",
    });

    await Reservation.create({
      name: "서울 회식2",
      location: "서울",
      price: 48000,
      dateTime: "2024-08-11T15:00:00",
      guests: 4,
      imageUrl: "http://example.com/image2.jpg",
    });

    await Reservation.create({
      name: "서울 회식3",
      location: "서울",
      price: 74000,
      dateTime: "2024-08-12T16:00:00",
      guests: 4,
      imageUrl: "http://example.com/image3.jpg",
    });

    await Reservation.create({
      name: "서울 회식3",
      location: "서울",
      price: 25000,
      dateTime: "2024-08-11T17:00:00",
      guests: 6,
      imageUrl: "http://example.com/image1.jpg",
    });

    await Reservation.create({
      name: "서울 회식4",
      location: "서울",
      price: 48000,
      dateTime: "2024-08-11T18:00:00",
      guests: 4,
      imageUrl: "http://example.com/image2.jpg",
    });

    await Reservation.create({
      name: "서울 회식5",
      location: "서울",
      price: 74000,
      dateTime: "2024-08-12T00:00:00",
      guests: 4,
      imageUrl: "http://example.com/image3.jpg",
    });

    console.log("Dummy data inserted");
    process.exit();
  })
  .catch((err) => {
    console.error("Error inserting data:", err);
    process.exit(1);
  });
