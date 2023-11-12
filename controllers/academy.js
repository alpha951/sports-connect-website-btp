const Academy = require("../models/Academy");
const User = require("../models/User");
const asycnWrapper = require("../middleware/async");
const { StatusCodes } = require("http-status-codes");
const { haveCommonElements } = require("../utils/");

const addAcademy = asycnWrapper(async (req, res) => {
  req.body.createdBy = req.user.userId;
  const academy = await Academy.create(req.body);
  res.status(StatusCodes.OK).json({ data: academy });
});

const updateAcademy = asycnWrapper(async (req, res) => {
  const { id } = req.params;
  const { userId } = req.user;
  delete req.body.createdBy;
  const academy = await Academy.findByIdAndUpdate(
    { _id: id, createdBy: userId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(StatusCodes.OK).json({ data: academy });
});

/*
  This function is used to get academies based on the following criteria:
   1. state
   2. city
   3. sports of interest
*/
const getAcademy = asycnWrapper(async (req, res, next) => {
  const queryObject = {};
  queryObject.state = req.body.state;
  queryObject.city = req.body.city;
  const academies = await Academy.find(queryObject);
  let results = [];
  for (let i = 0; i < academies.length; i++) {
    if (haveCommonElements(academies[i].sports, req.body.sport)) {
      results.push(academies[i]);
    }
  }
  res.status(StatusCodes.OK).json({ data: results });
});

module.exports = {
  addAcademy,
  updateAcademy,
  getAcademy,
};
