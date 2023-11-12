const User = require("../models/User");
const Event = require("../models/Event");
const asycnWrapper = require("../middleware/async");
const { StatusCodes } = require("http-status-codes");
const { haveCommonElements } = require("../utils/");

const updatePlayer = asycnWrapper(async (req, res) => {
  const { userId } = req.user;
  const player = await User.findByIdAndUpdate(userId, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(StatusCodes.OK).json({ data: player });
});

const createEvent = asycnWrapper(async (req, res) => {
  req.body.createdBy = req.user.userId;
  const event = await Event.create(req.body);
  res.status(StatusCodes.OK).json({ data: event });
});

const getPlayers = asycnWrapper(async (req, res, next) => {
  let { city, state, time } = req.body;
  time = new Date(time);

  // Ensure 'time' is a valid Date object
  if (!(time instanceof Date && !isNaN(time))) {
    throw new Error("Invalid date provided");
  }

  const user = await User.findById(req.user.userId);
  const userInterests = user.interests.map((interest) =>
    interest.toLowerCase()
  ); // Updated line

  const userSkillLevel = user.skillLevels;

  // Query Events in the same city and time
  // TODO : We can work more on the time range may be ask start and end time from the user and also add start and end time of and event during creation of and event
  const eventsInCityAndTime = await Event.find({
    city: city,
    state: state,
    time: {
      $gte: new Date(time.getTime() - 2 * 60 * 60 * 1000), // 2 hours before the specified time
      $lte: new Date(time.getTime() + 2 * 60 * 60 * 1000), // 2 hours after the specified time
    },
  });
  console.log(user);
  console.log(eventsInCityAndTime);
  // Filter Events by Interests and Skill Levels
  const skillWeight = {
    Beginner: 1,
    Intermediate: 2,
    Advanced: 3,
  };
  console.log(userInterests);
  const potentialEvents = eventsInCityAndTime.filter((event) => {
    console.log("event interest", event.interests);
    return (
      event.interests.some((interest) =>
        userInterests.includes(interest.toLowerCase())
      ) &&
      skillWeight[event.skillLevels] <= skillWeight[userSkillLevel] &&
      event.createdBy !== req.user.userId
    );
  });
  console.log(potentialEvents);
  res.status(StatusCodes.OK).json({ data: potentialEvents });
});

module.exports = {
  updatePlayer,
  getPlayers,
  createEvent,
};
