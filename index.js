const express = require("express");

const dotenv = require("dotenv");
const dbCOnnection = require("./config/dbConnection")

dotenv.config();
const app = express();
dbCOnnection()

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port 5000");
});
