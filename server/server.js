const express = require('express');
const mongoose = require('mongoose');
const crudRouter = require('./controllerLayer/crud.controller');
const env = require('dotenv').config()
const app = express();
const port = process.env.SERVER_PORT

app.get('/', (req, res) => res.send('Server File'));

app.use('/crud', crudRouter);
// connect mongoDB
// connect to user database using remote connection

mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});
app.listen(port, () => console.log(`BoilerPlate app listening on port ${port}!`));

