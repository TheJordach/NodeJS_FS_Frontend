const express = require('express');
const cors = require('cors');
const router = require('../router/router');

const app = express();

// Cors middleware
app.use(cors());

// Middleware for parsing JSON bodies
app.use(express.json());

// Declare middleware for templating
app.set('view engine', 'ejs'); // Set the view engine

app.engine('ejs', require('ejs').__express); // Set the engine

// Declare the public folder as static for serving static files
app.use(express.static('public'));

// Use the router middleware
app.use('/', router);

module.exports = app;
