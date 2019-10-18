/* Modules imports */
var express = require('express');
var router = express.Router();

/* Controllers imports */
var users = require('../controllers/users');

/* POST user */
router.post('/create', function(req, res) {
  users.createUser(req, res);
});

module.exports = router;
