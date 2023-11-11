const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const asycnWrapper = require("../middleware/async");

const register = asycnWrapper(async (req, res) => {
  const user = await User.create(req.body);
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ token });
});

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.send("please provide email and password");
  }
  const user = await User.findOne({ email });

  if (!user) {
    return res.send("Invalid Credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    return res.send("Invalid Credentials");
  }
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ token });
};

module.exports = {
  register,
  login,
};
