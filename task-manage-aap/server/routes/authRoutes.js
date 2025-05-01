const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const { getTasks } = require("../controllers/taskController");

router.post("/register", register);
router.post("/login", login);
router.get("/", authMiddleware, getTasks);

module.exports = router;
