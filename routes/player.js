const express = require("express");
const router = express.Router();

const { authValidator } = require("../middleware/authentication");

router.route("/getplayers").get(authValidator, getPlayers);
router.route("/editprofile").patch(authValidator, updatePlayer);
