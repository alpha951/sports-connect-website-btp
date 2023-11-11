const express = require("express");
const authenticateUser = require("../middleware/authentication");
const router = express.Router();
const {
  addAcademy,
  updateAcademy,
  updatePlayer,
  getAcademy,
  getPlayers,
} = require("../controllers/players");

router.route("/addacademy").post(authenticateUser, addAcademy);
router.route("/editprofile").patch(authenticateUser, updatePlayer);
router.route("/getacademy").post(authenticateUser, getAcademy);
router.route("/getplayers").get(authenticateUser, getPlayers);

module.exports = router;
