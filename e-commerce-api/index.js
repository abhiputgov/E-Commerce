require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./routes/user');
const cartRoute = require('./routes/cart');
const productRoute = require('./routes/product');
const orderRoute = require('./routes/order');
const authRoute = require('./routes/auth');
const stripeRoute = require('./routes/stripe');

app.use(
  cors({
    origin: 'http://localhost:5173/',
    optionsSuccessStatus: 200,
  }),
);
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/cart', cartRoute);
app.use('/api/product', productRoute);
app.use('/api/order', orderRoute);
app.use('/api/checkout', stripeRoute);

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
