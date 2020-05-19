const express = require('express');
const app = express();
const SERVER_PORT = 4040;
const userCtrl = require('./conrollers/userController');

app.use(express.json()); // .use() is invoked on every request that the server receives.

app.get('/api/users', userCtrl.getUsers);

app.get('/api/users/:user_id', userCtrl.getUser);

app.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}`));