// Entry point for client Javascript

const express = require('express');
const morgan = require('morgan');

const app = express(); 


// Logger middleware
app.use(morgan('dev'));