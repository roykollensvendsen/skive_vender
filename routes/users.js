var express = require('express');
var router = express.Router();
var targetTurner = require('../target_turner.js');

/* GET users listing. */
router.post('/',function(req, res, next) {
   var config = req.body;
   console.log("first config: " + config);
   console.log("req: " + req);
   targetTurner.run(config);
});

module.exports = router;
