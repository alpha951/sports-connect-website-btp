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

const register = async (req, res, next) => {
  const data = req.body;
  try {
    if (!data.name | !data.email | !data.password | !data.gender) {
      res.send("please provide all the required details");
    }
    next();
  } catch (error) {
    console.log("Error inside auth/register middleware", error);
  }
};

module.exports = { auth, register };
