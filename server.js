/**
 * Created by ian on 5/6/15.
 */

// Import the modules installed to our server
var express = require('express');
var bodyParser = require('body-parser');

// Start the Express Web Framework
var app = express();

// Configure the app
app.use(bodyParser());

// Where the Application will run
var port = process.env.PORT || 8080;

// Import Mongoose
var mongoose = require('mongoose');

