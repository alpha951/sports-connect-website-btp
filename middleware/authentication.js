const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const colors = require("@colors/colors");

const authValidator = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  try {
    const token = authHeader;
    const payLoad = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      userId: payLoad.userId,
      name: payLoad.name,
    };
    next();
  } catch (err) {
    throw new Error(err);
  }
};

const registerValidator = async (req, res, next) => {
  const data = req.body;
  try {
    if (!data.name | !data.email | !data.password | !data.gender) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .send("please provide all the required details");
    }
    next();
  } catch (error) {
    console.log("Error inside auth/register middleware", error);
    throw new Error(error);
  }
};

const loginValidator = async (req, res, next) => {
  const data = req.body;
  try {
    if (!data.email || !data.password) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send("please provide email and password");
    }
    next();
  } catch (error) {
    console.log("error inside auth/login middleware".red, error);
    throw new Error(error);
  }
};

module.exports = { authValidator, registerValidator, loginValidator };
