const router = require('express').Router();
const User = require('../models/User');
const { verifyToken, verifyAndAuthorize } = require('./verifyToken');

router.put('/:id', verifyAndAuthorize, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.CRYPTOJS_KEY,
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true },
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
