const router = require('express').Router();
const User = require('../models/User');
const {
  verifyToken,
  verifyAndAuthorize,
  verifyTokenAndAdminVerify,
} = require('./verifyToken');
const CryptoJS = require('crypto-js');

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

    const { password, ...others } = updatedUser._doc;
    res.status(200).json(others);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.delete('/:id', verifyAndAuthorize, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json('User has been deleted');
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', verifyTokenAndAdminVerify, async (req, res) => {
  try {
    const fetchedUser = await User.findById(req.params.id);
    const { password, ...others } = fetchedUser._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/', verifyTokenAndAdminVerify, async (req, res) => {
  const query = req.query.new;
  try {
    const allFetchedUsers = query
      ? await User.find().sort({ _id: -1 }).limit(1)
      : await User.find();
    const { password, ...others } = allFetchedUsers;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/stats', verifyTokenAndAdminVerify, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  try {
    const data = await User.aggregate([
      {
        $match: {
          createdAt: {
            $gte: lastYear,
          },
        },
      },
      {
        $project: {
          month: { $month: '$createdAt' },
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
