const Academy = require("../models/Academy");
const User = require("../models/User");
const asycnWrapper = require("../middleware/async");

function haveCommonElements(array1, array2) {
  return array1.some((element) => array2.includes(element));
}

const addAcademy = asycnWrapper(async (req, res) => {
  req.body.createdBy = req.user.userId;
  const academy = await Academy.create(req.body);
  res.status(200).json({ academy });
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
  res.status(200).json({ academy });
});

const updatePlayer = asycnWrapper(async (req, res) => {
  const { userId } = req.user;
  const player = await User.findByIdAndUpdate(userId, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ player });
});

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
  res.status(200).json(result);
});

const getPlayers = asycnWrapper(async (req, res, next) => {
  const user = await User.findById(req.user.userId);
  const intrests1 = user.intrests;
  const queryObject = {};
  queryObject.state = user.state;
  queryObject.city = user.city;
  // queryObject.days = user.days
  // queryObject.time = user.time
  const players = await User.find(queryObject);
  let results = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i]._id.equals(user._id)) {
      continue;
    }
    if (haveCommonElements(players[i].intrests, intrests1)) {
      results.push(players[i]);
    }
  }
  res.status(200).json({ results });
});

module.exports = {
  addAcademy,
  updateAcademy,
  updatePlayer,
  getAcademy,
  getPlayers,
};
