require('dotenv').config();
const app = require('express')();
const mongoose = require('mongoose');

app.get('/api/test', () => {
  console.log('first test is successful');
});

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI + '?dbname=e-commerce');
    app.listen(process.env.SERVER_PORT, () => {
      console.log(`Server listening on port ${process.env.SERVER_PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
