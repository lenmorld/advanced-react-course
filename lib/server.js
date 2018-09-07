// const express = require('express');
// const config = require('./config');

// ES6
import express  from 'express';
import config from './config';
import serverRender from './renderers/server';

const app = express();

app.use(express.static('public'));

// EJS template
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const initialContent = serverRender();
  res.render('index', { initialContent });
});

app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}...`);
});
