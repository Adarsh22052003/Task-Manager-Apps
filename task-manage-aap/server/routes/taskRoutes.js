// const express = require("express");
// const router = express.Router();
// const auth = require("../middleware/authMiddleware");
// const {
//   createTask,
//   getTasks,
//   getTaskById,
//   updateTask,
// } = require("../controllers/taskController");

// router.post("/", auth, createTask);
// router.get("/", auth, getTasks);
// router.get("/:id", auth, getTaskById);
// router.put("/:id", auth, updateTask);

// module.exports = router;

const express = require("express");
const router = express.Router();
const { getTasks } = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");

// ✅ GET /api/tasks
router.get("/", authMiddleware, getTasks);

module.exports = router;
