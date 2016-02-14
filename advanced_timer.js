var AdvancedTimer = (function (my) {

   my.timeouts = [];

   my.setMultipleTimeouts  = function (timeouts) {
      for (var i = 0; i < timeouts.length; i++) {
         var timeout = setTimeout(timeouts[i].callback, timeouts[i].timeout);
         my.timeouts.push(timeout);
      }
   };

   my.clearAllTimeouts = function () {
      for (var i = my.timeouts.length - 1; i >= 0; i--) {
          clearTimeout(my.timeouts[i]);
          my.timeouts.splice(i, 1);
      }
   };

   return my;

})(AdvancedTimer || {});

module.exports = AdvancedTimer;
