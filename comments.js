// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var fs = require('fs');
var path = require('path');
var db = require('./db.js');
var connection = db.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));