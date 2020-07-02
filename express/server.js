'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const router = express.Router();

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.set('views', __dirname + '/../ui');
app.use('/login', require('./login.js'));

app.use('/', require('./web.js'));
//app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
