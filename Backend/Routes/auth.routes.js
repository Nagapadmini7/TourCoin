const { Router } = require("express");
const { signup_post, login_post } = require("../Controllers/auth.controller");
const { CreateUser } = require("../Controllers/user.controller");

const router = Router();

// router.get("/signup", signup_get);
router.post("/signup", signup_post);
// router.get("/login", login_get);
router.post("/login", login_post);
// router.get("/logout", logout_get);
router.post("/createUser", CreateUser);

module.exports = router;
