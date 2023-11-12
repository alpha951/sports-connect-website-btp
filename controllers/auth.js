const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({ token });
  } catch (error) {
    console.log("error inside auth/register controller");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
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
