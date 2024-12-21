const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/userController");
const { loginUser } = require("../controllers/userController");
const { getME } = require("../controllers/userController");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", getME);

module.exports = router;
