const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
app.use(cors());
// var sql = require("mssql");
const port = 6000;
app.use(morgan("common"));
dotenv.config();
const authorRoute = require("./routes/user");
//process.env.MONGODB_URL
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log(`connected to MongoDB `);
});
app.use("/v1/author", authorRoute);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
