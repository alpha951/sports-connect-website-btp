const { StatusCodes } = require("http-status-codes");

const eventValidator = async (req, res, next) => {
  try {
    const { time, state, city, interests } = req.body;
    if (!time | !state | !city | !interests) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Please provide all the required fields" });
    }
    next();
  } catch (error) {
    console.log("error inside academyValidator middleware");
  }
};

module.exports = { eventValidator };
