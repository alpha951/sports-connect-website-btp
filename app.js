const dotenv = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const authRouter = require("./routes/auth");
const players = require("./routes/routes");

app.use("/auth", authRouter);
app.use("/qwer", players);

app.all("*", function (req, res) {
  res.send("not found");
});

mongoose
  .connect(
    // "mongodb+srv://mayank:mayank@cluster0.fy2cjib.mongodb.net/BTP?retryWrites=true&w=majority"
    process.env.MONGO_URI
  )
  .then(() => {
    console.log("App connected to database");
    app.listen(5000, function () {
      console.log("server started");
    });
  })
  .catch((error) => {
    console.log(error);
  });
