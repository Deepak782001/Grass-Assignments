const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Full stack web development');
  
});

app.listen(3000, console.log('Server is 3000'));