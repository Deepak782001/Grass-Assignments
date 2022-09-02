const express = require("express");
const app = express();

const connectToDB = require("./DB/index.js");
const Usermodel = require("./models/users.model.js");


const PORT = 8000;

connectToDB();

app.get("/", (req, res) => {
  res.send("It is working");
});

console.log(Usermodel);
app.listen(PORT, function () {
  console.log("Data is on port ", +PORT);
});
