const express = require("express");
const router = express.Router();

const { auth, register } = require("../middleware/authentication");
const {
  addAcademy,
  updateAcademy,
  updatePlayer,
  getAcademy,
  getPlayers,
} = require("../controllers/academy");

router.route("/addacademy").post(auth, addAcademy);
router.route("/getacademy").post(auth, getAcademy);

router.route("/getplayers").get(auth, getPlayers);
router.route("/editprofile").patch(auth, updatePlayer);

module.exports = router;
