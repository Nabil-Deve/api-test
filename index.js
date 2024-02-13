const express = require("express"); // en ES5
const mongoose = require("mongoose");
const taskRouter = require("./src/Routes/taskRoute");

const app = express();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/api-test");
  console.log("Hellooo");
}

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.use("/task", taskRouter);

app.listen(3000, () => {
  console.log("http://localhost:3000 Bonjour");
});
