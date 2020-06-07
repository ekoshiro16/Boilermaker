// Entry point for server javascript
const express = require('express');
const morgan = require('morgan');
const path = require('path'); 
const bodyParser = require('body-parser');
const app = express(); 


// Static middleware
app.use(express.static(path.join(__dirname, '../public')));


// Logger middleware
app.use(morgan('dev')); 


// Parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// api routes
app.use('/api', require('../apiRoutes'));


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


// Starting the server
const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
app.listen(port, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
});


module.exports = app;