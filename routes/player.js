const express = require("express");
const router = express.Router();

const { authValidator } = require("../middleware/authentication");
const { getPlayers, updatePlayer } = require("../controllers/player");

router.route("/getplayers").get(authValidator, getPlayers);
router.route("/editprofile").patch(authValidator, updatePlayer);

module.exports = router;
