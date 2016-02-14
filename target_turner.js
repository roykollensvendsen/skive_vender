var relay = require("./relay");
var advanced_timer = require("./advanced_timer");

var TargetTurner = (function () {

   var self = this; 

   return {
      run: function (config) {
         console.log("second config: " + config);
         advanced_timer.clearAllTimeouts();
         var delay = 0;
         var program = [];
         program.push({callback: relay.turnOff, timeout: delay += config.show_before});
         for (var i = 0; i < config.repetitions; i++) {
            program.push({callback: relay.turnOn, timeout: delay += config.hide_time});
            program.push({callback: relay.turnOff, timeout: delay += config.show_time});
         }
         program.push({callback: relay.turnOn, timeout: delay += config.hide_after});
         relay.turnOn();
         advanced_timer.setMultipleTimeouts(program); 
      }
   };
})();

module.exports = TargetTurner;











