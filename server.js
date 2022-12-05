const express = require('express');
const mongoose = require('mongoose');
const crudRouter = require('./controllerLayer/crud.controller');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Server File'));

app.use('/crud', crudRouter);
// connect mongoDB
// connect to user database using remote connection

mongoose.connect('mongodb+srv://zorain:mnbv098765@cluster0.qqg6t.mongodb.net/MERN_BoilerPlate?retryWrites=true&w=majority');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});
app.listen(port, () => console.log(`BoilerPlate app listening on port ${port}!`));

