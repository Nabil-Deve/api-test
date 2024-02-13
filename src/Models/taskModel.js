const mongoose = require("mongoose");

// Le schéma (mot ou fonction de mongoose) est fixe et le modèle est une instance du schéma. Créer une nouvelle tâche c'est à partir du schéma.
// D'abord, on créé le schéma, puis on va dire que le modèle qu'on va appeler task copie le schéma.

const taskSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
