const dotenv = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const PORT = process.env.PORT | 5000;
const { errorHandlerMiddleware } = require("./middleware/error-handler");
const colors = require("@colors/colors");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

const authRouter = require("./routes/auth");
const players = require("./routes/player");
const academy = require("./routes/academy");

app.use("/auth", authRouter);
app.use("/play", players);
app.use("/academy", academy);

app.all("*", function (req, res) {
  res.status(404).send("not found");
});

app.use(errorHandlerMiddleware);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("App connected to database".rainbow);
    app.listen(PORT, function () {
      console.log(`App listening on port ${PORT}!`.brightCyan.bgMagenta);
    });
  })
  .catch((error) => {
    console.log(error);
  });
