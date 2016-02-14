var express = require('express');
var router = express.Router();
var targetTurner = require('../target_turner.js');

/* GET users listing. */
router.post('/',function(req, res, next) {
   var config = req.body;
   console.log("Current config: " + JSON.stringify(config));
   targetTurner.run(config);
   res.send("response");
});

module.exports = router;
