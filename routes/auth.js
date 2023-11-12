const express = require("express");
const router = express.Router();

const {
  registerValidator,
  loginValidator,
} = require("../middleware/authentication");
const { register, login } = require("../constorllers/auth");

router.route("/register").post(registerValidator, register);
router.route("/login").post(loginValidator, login);

module.exports = router;
