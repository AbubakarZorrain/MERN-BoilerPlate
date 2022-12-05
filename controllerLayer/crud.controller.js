const express = require('express');
const crudRouter = express.Router();
const crudService = require('../serviceLayer/crud.service');
crudRouter.get('/', (req, res) => res.send('CRUD File'));

crudRouter.get('/homecrud', async(req, res) => {
    res.send(await crudService.getUser())
});

crudRouter.post('/homecrud',async (req, res) => {
    // get body of request
    const query = req.query;
    const name = query.name;
    const email = query.email;
    const password = query.password;
    const created_at = query.created_at;
    const updated_at = query.updated_at;
    await crudService.createUser(name, password, email, created_at, updated_at);
    res.send('User Created!');
});

module.exports = crudRouter;