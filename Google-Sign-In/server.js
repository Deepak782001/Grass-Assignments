const express = require('express');
const app = express();

const PORT = 8000;

// Middleware
//app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/login', (req, res) => {
    res.render('../views/index')
})

app.listen(PORT, console.log("Server listening on port " + PORT));