const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./config/router');
const { port, dbURI } = require('./config/environment');

const mongoose = require('mongoose');
mongoose.connect(dbURI);

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());

app.use(morgan('dev'));
app.use('/api', router);

app.listen(port, () => console.log(`Express is listening on port ${port}`));
