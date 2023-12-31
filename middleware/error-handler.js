const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("../errors/custom-error");

const errorHandlerMiddleware = (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "Something went wrong try again later";

  if (error.name === "JsonWebTokenError") {
    const msg = "please login";
    error = new CustomAPIError(msg, StatusCodes.UNAUTHORIZED);
  }

  if (error.name === "ValidationError") {
    const errors = Object.values(error.errors).map((val) => val.message);

    const errorMessages = errors.join(". ");

    const msg = `Invalid input data: ${errorMessages}`;
    error = new CustomAPIError(msg, StatusCodes.BAD_REQUEST);
  }

  if (error.code == 11000) {
    const msg = `Duplicate value entered for ${Object.keys(
      error.keyValue
    )} field, please choose another value`;
    error = new CustomAPIError(msg, StatusCodes.BAD_REQUEST);
  }

  if (error.name === "CastError") {
    const msg = `No item found with id : ${error.value}`;
    error = new CustomAPIError(msg, StatusCodes.NOT_FOUND);
  }

  res.status(error.statusCode).json({ msg: error.message });
};
module.exports = { errorHandlerMiddleware };
