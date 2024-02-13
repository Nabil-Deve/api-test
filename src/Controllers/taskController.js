const Task = require("../Models/taskModel");

const allTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
    console.log("Toutes les tasks");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = allTask;
