const express = require("express");
const app = express();

const connectToDB = require("./DB/index.js");
const Usermodel = require("./models/users.model.js");

const PORT = 8000;

connectToDB();
// using this we can send and view json objects
app.use(express.json());

app.get("/", (req, res) => {
  res.send("It is working");
});


app.post("/adduser", (request, response) => {
  //console.log(request.body);
  
  // destructureing of data
  // const { names, phone } = request.body;
  // console.log('Name:' +names)
  // console.log('Phone no:' +phone)
  // response.send("please check ");

  const bodyname = request.body.names;
  const bodyphone = request.body.phone;
  console.log(bodyname,bodyphone);

  const userDetails = new Usermodel({
  names: bodyname,
  phone: bodyphone, 
  })

  console.log(userDetails);
  userDetails.save();
});

console.log(Usermodel);
app.listen(PORT, function () {
  console.log("Data is on port ", +PORT);
});
