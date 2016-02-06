var express = require('express');
var router = express.Router();
var relay = require('../relay.js');

/* GET users listing. */
router.post('/',function(req, res, next) {
  relay.run(req.body);
  router.send("started...");
});

module.exports = router;
