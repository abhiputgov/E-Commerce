const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

//REGISTER:
router.post('/register', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.CRYPTOJS_KEY,
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN:
router.post('/login', async (req, res) => {
  try {
    const registeredUser = await User.findOne({
      username: req.body.username,
    });
    if (!registeredUser) {
      return res.status(401).json('Wrong User Name');
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      registeredUser.password,
      process.env.CRYPTOJS_KEY,
    );
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    const inputPassword = req.body.password;
    if (originalPassword != inputPassword) {
      return res.status(401).json('Wrong Password');
    }
    const accessToken = jwt.sign(
      {
        id: registeredUser._id,
        isAdmin: registeredUser.isAdmin,
      },
      process.env.JWT_KEY,
      { expiresIn: '3d' },
    );
    const { password, ...others } = registeredUser._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
