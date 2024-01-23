const express = require("express");

const dotenv = require("dotenv");
const cors = require("cors");
const todoRouter = require("./routes/TodoRouter");
const dbCOnnection = require("./config/dbConnection");

dotenv.config();
const app = express();
dbCOnnection();
app.use(cors());
app.use(express.json());

app.use("/", todoRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port 5000");
});
