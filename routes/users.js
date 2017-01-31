var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) { // here '/' means it is '/users/' by default as from app.js
  res.send('respond with a resource');
});

module.exports = router;
