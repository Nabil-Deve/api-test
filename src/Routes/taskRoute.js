const express = require("express");
const allTask = require("../Controllers/taskController");

const taskRouter = express.Router();

taskRouter.get("/get", allTask);

module.exports = taskRouter;
