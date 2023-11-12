const dotenv = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const PORT = process.env.PORT | 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

const authRouter = require("./routes/auth");
const players = require("./routes/play");

app.use("/auth", authRouter);
app.use("/play", players);

app.all("*", function (req, res) {
  res.status(404).send("not found");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, function () {
      console.log(`App listening on port ${PORT}!`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
