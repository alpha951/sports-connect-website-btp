const express = require("express");
const router = express.Router();

const { authValidator } = require("../middleware/authentication");
const {
  addAcademy,
  updateAcademy,
  getAcademy,
} = require("../controllers/academy");

router.route("/add-academy").post(authValidator, addAcademy);
router.route("/get-academy").post(authValidator, getAcademy);
router.route("/update-academy").patch(authValidator, updateAcademy);

module.exports = router;
