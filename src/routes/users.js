const router = require("express").Router();
const { registerUser, loginUser } = require("../controller/users");

router.post("/login", loginUser);

router.post("/register", registerUser);

module.exports = router;
