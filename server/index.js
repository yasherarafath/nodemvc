const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

const port = 1234;

app.use('/api',require('./routes/product.routes'));

app.listen(port, () => console.log('Server is running and up'));

const mongoParams = { useNewUrlParser: true,useUnifiedTopology: true };
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mongoangular',mongoParams)
.then(() => console.log('Mongo is up and running'));

