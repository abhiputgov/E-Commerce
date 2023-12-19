const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.token;
  if (!authHeader) {
    return res.status(401).json('you are not authorized');
  }
  const token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.JWT_KEY, (err, user) => {
    if (err) {
      return res.status(403).json('Token is invalid');
    } else {
      req.user = user;
      next();
    }
  });
};

const verifyAndAuthorize = async (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return res.status(403).json('You are not allowed to access this');
    }
  });
};

const verifyTokenAndAdminVerify = async (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return res
        .status(403)
        .json('You are not an admin. So you are not allowed to do that');
    }
  });
};

module.exports = { verifyToken, verifyAndAuthorize, verifyTokenAndAdminVerify };
