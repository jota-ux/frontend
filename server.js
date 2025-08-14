const express = require('express');
const app = express();
const port = 3000;

const oiController = require('./controllers/oiController');
const UserController = require('.src/controllers/userController');  

app.use(express.json());

app.get('/oi', oiController.sayOi);

app.get('/users', (req, res) => {
    UserController.createUser(req, res);
});

app.get('/users', (req, res) => {
    UserController.getUsers(req, res);
});

app.listen(port, () => {
    console.log(`{A API está rodando em http://localhost:${port}`);
});