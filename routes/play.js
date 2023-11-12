const express = require("express");
const router = express.Router();

const { auth, register } = require("../middleware/authentication");
const {
  addAcademy,
  updateAcademy,
  updatePlayer,
  getAcademy,
  getPlayers,
} = require("../controllers/players");

router.route("/addacademy").post(auth, addAcademy);
router.route("/editprofile").patch(auth, updatePlayer);
router.route("/getacademy").post(auth, getAcademy);
router.route("/getplayers").get(auth, getPlayers);

module.exports = router;
