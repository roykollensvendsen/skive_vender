var relay = require("./relay");
var advanced_timer = require("./advanced_timer");

var TargetTurner = (function () {
   return {
      run: function (config) {
         advanced_timer.clearAllTimeouts();
         var delay = 0;
         var program = [];
         program.push({callback: relay.turnOff, timeout: delay += config.show_before * 1000});
         for (var i = 0; i < config.repetitions; i++) {
            program.push({callback: relay.turnOn, timeout: delay += config.hide_time * 1000});
            program.push({callback: relay.turnOff, timeout: delay += config.show_time * 1000});
         }
         program.push({callback: relay.turnOn, timeout: delay += config.hide_after * 1000});
         relay.turnOn();
         advanced_timer.setMultipleTimeouts(program); 
      }
   };
})();

module.exports = TargetTurner;











