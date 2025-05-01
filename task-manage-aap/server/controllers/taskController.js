const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  const task = await Task.create({ title: req.body.title,description:req.body.title,  userId: req.user.id });
  res.status(201).json(task);
};

// taskController.js
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};


exports.getTaskById = async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id, userId: req.user.id });
  if (!task) return res.status(404).json({ msg: "Not found" });
  res.json(task);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.id },
    { title: req.body.title },
    { new: true }
  );
  res.json(task);
};
