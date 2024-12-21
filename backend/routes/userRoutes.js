const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/userController");
const { loginUser } = require("../controllers/userController");
const { getME } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getME);

module.exports = router;
