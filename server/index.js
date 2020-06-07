// Entry point for server javascript
const express = require('express');
const morgan = require('morgan');

const app = express(); 

// Logger middleware
app.use(morgan('dev')); 

// Static middleware
app.use(express.static(path.join(__dirname, '../public')));

// Parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// api routes
app.use('/api', require('./apiRoutes'));

// send HTML
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

// 500 errors
app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });

module.exports = app;