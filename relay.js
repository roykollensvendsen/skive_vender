var spawn = require("child_process").spawn;

var Relay = (function () {
   var self = this; 
   self.child = spawn("python", ["-u", "./python/relay.py"]);
   self.child.stdout.on("data",function(data){console.log("stdout: " + data);});
   self.child.stderr.on("data",function(data){console.log("stderr: " + data);});
   self.child.stderr.on("close",function(){console.log("closed");});
   return {
      turnOn: function () {
         self.child.stdin.write("on\n");
      },
      turnOff: function () {
         self.child.stdin.write("off\n");
      }
   };
})();

module.exports = Relay;










