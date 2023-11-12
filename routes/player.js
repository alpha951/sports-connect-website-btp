const express = require("express");
const router = express.Router();

const { authValidator } = require("../middleware/authentication");
const { eventValidator } = require("../middleware/event");
const {
  getPlayers,
  updatePlayer,
  createEvent,
} = require("../controllers/player");

router.route("/getplayers").get(authValidator, getPlayers);
router.route("/editprofile").patch(authValidator, updatePlayer);
router.route("/create-event").post(authValidator, eventValidator, createEvent);

module.exports = router;
