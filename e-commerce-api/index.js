require("dotenv").config();
const express = require("express");
const app = express();

const mongoose = require("mongoose");

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(process.env.SERVER_PORT, () => {
      console.log(`Server listening on port   ${process.env.SERVER_PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
