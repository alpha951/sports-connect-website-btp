const { StatusCodes } = require("http-status-codes");

const academyValidator = async (req, res, next) => {
  try {
    const { name, state, city } = req.body;
    if (!name | !state | !city) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Please provide all the required fields" });
    }
    next();
  } catch (error) {
    console.log("error inside academyValidator middleware");
  }
};

module.exports = { academyValidator };
