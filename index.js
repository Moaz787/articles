require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const compress = require("compression");
const bodyParser = require("body-parser");
const router = require("./routes/article.routes");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(cors({ origin: "*" }));
app.use(compress());
app.use(express.json());
app.use(express.static('public'));
app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const startServer = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`http://localhsot:${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

module.exports = app;
