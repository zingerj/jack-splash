"use strict";

// Routes, with inline controllers for each route.
var express = require('express');
var router = express.Router();

//REGISTER NEW USER
router.get('/', function(req, res) {
  res.render('index')
})

module.exports = router;
