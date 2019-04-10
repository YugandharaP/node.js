debugger;
var express= require('express');
var db = require('./db');
var app = express();
debugger
var userController  = require('./user/UserController');

app.use('/users',userController);

module.exports = app;

