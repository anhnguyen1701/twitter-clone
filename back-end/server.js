require("dotenv").config();

const { connectDB } = require("./configs/db");

connectDB();

const express = require("express");
const cors = require("cors");

//import routes
const authRoute = require("./routes/authRoute");
const postRoute = require("./routes/postRoute");

//import error handler
const { errorHandler } = require("./middlewares/errorHandler");

const app = express();

// Cors
app.use(cors());

// Body Parser
app.use(express.json());

//Mount the route
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/posts", postRoute);

// unhandled route
app.all("*", (req, res, next) => {
  const err = new Error("The route can not be found");
  err.statusCode = 404;
  next(err);
});
app.use(errorHandler);
const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
