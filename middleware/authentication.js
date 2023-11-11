const User = require("../models/User");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  try {
    const token = authHeader;
    const payLoad = jwt.verify(token, "jwtsecret");
    req.user = {
      userId: payLoad.userId,
      name: payLoad.name,
    };
    next();
  } catch (err) {
    // next(err)
    res.send("error");
  }
};

module.exports = auth;
