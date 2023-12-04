require('dotenv').config();
const app = require('express')();
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('DB connection established.....');
    app.listen(process.env.SERVER_PORT, () => {
      console.log(
        `Backend server is listening on port ${process.env.SERVER_PORT}......`,
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
