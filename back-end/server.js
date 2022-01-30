//entry point file
//phai config dotenv truoc de su dung duoc bien
require("dotenv").config();
//connect Db
const { connectDB } = require("./config/db");

connectDB();

const express = require("express");
const cors = require("cors");

const app = express();

// Cors
app.use(cors());

// Body Parser
app.use(express.json());

app.get("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {
      posts: ["a1a"],
    },
  });
});

const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`server is runnign on port ${port}`);
});
