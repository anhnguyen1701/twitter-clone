require("dotenv").config();

const { connectDB } = require("./configs/db");

connectDB();

const express = require("express");
const cors = require("cors");

//import routes
const authRoute = require('./routes/authRoute');
const postRoute = require('./routes/postRoute');

const app = express();

// Cors
app.use(cors());

// Body Parser
app.use(express.json());

//Mount the route
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/posts', postRoute);

const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
