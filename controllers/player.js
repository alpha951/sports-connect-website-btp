const User = require("../models/User");
const asycnWrapper = require("../middleware/async");
const { StatusCodes } = require("http-status-codes");
const { haveCommonElements } = require("../utils/");

const updatePlayer = asycnWrapper(async (req, res) => {
  const { userId } = req.user;
  const player = await User.findByIdAndUpdate(userId, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(StatusCodes.OK).json({ player });
});

const getPlayers = asycnWrapper(async (req, res, next) => {
  const user = await User.findById(req.user.userId);
  const userInterests = user.interests;
  const queryObject = {};
  queryObject.state = user.state;
  queryObject.city = user.city;
  const players = await User.find(queryObject);
  let results = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i]._id.equals(user._id)) {
      continue;
    }
    if (haveCommonElements(players[i].interests, userInterests)) {
      results.push(players[i]);
    }
  }
  res.status(StatusCodes.OK).json({ results });
});

module.exports = {
  updatePlayer,
  getPlayers,
};
