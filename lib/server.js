// const express = require('express');
// const config = require('./config');

// ES6
import express  from 'express';
import axios from 'axios';

import config from './config';
import serverRender from './renderers/server';
import { data } from './testData';

const app = express();

app.use(express.static('public'));

// EJS template
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const initialContent = serverRender();
  res.render('index', { initialContent });
});

app.get('/data', (req, res) => {
  res.send(data);
});

app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}...`);
});
