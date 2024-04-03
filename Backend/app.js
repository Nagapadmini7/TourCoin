const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const port = process.env.PORT || 8080;
const User = require("./Models/user.js");
const cors = require('cors');

const userDetail = require("./Models/userDetail.js");
// const authController = require("./controllers/auth.controller.js");
const userController = require("./Controllers/user.controller.js");
const hashVerifier = require("./Middleware/authMiddleware.js");
const authRoutes = require("./Routes/auth.routes");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(express.static("public"));
require("dotenv").config();

app.use(cors({
  origin: '*',
}));

// middleware
app.use((req, res, next) => {
  console.log("Hello from the middleware 👋");
  next();
});

app.use(
  "/auth",
  hashVerifier.base64Decoder,
  hashVerifier.md5HashVerifier,
  authRoutes
);

// app.post("/signup", authController.signup_post);
// app.post("/login", authController.login_post);
app.post(
  "/createUser",
  hashVerifier.base64Decoder,
  hashVerifier.md5HashVerifier,
  userController.CreateUser
);

app.get("/", (req, res) => {
  res.send("v4");
});

mongoose.set("strictQuery", false);
// database connection
mongoose
  .connect(
    `mongodb+srv://sarthakm890:C3e5k2miCSncL4Wx@cluster.f7wps5s.mongodb.net/`
  )
  .then((result) => {
    console.log("Database Connected!!");
    app.listen(port, () => {
      console.log("lets goo");
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
