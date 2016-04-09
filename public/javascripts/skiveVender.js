var counter = (function () {
   var internal_counter;
   var interval;
   return {
      start: function () {
         internal_counter = 1;
         interval = setInterval(function () {
            $("#counter").text(internal_counter);
            internal_counter++;
         }, 1000);
      },
      restart: function () {
         internal_counter = 1;
      },
      stop: function () {
         clearInterval(interval);
         internal_counter = 1;
         $("#counter").text("");
      }
   };
})();

var advanced_timer = (function () {
   var my = this;
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
})();

function centerElement(element){
   element.css("margin-left", element.parent().width() / 2 - element.width() / 2);
}
var target = (function () {
   return {
      centerMe: function () {
         var target_element =$("#target");
         var container = $("#target_container");
         var front_img = $("#front_img");
         var back_img  = $("#back_img");
         container.height(front_img.height());
         container.width("100%");
         centerElement(back_img);
         centerElement(front_img);
         centerElement(target_element);
      },
      showMe: function () {
         $("#target").flip(false); 
         counter.restart();
      },
      hideMe: function () {
         $("#target").flip(true); 
         counter.restart();
      },
      toggleMe: function () {
         $("#target").flip(); 
      }
   };
})();

var target_turner = (function () {
   var end = function () {
      target.showMe();
      counter.stop();
   };
   return {
      run: function (config) {
         advanced_timer.clearAllTimeouts();
         var delay = 0;
         var program = [];

         program.push({
            callback: target.hideMe,
            timeout: delay += config.show_before * 1000
         });

         for (var i = 0; i < config.repetitions; i++) {
            program.push({
               callback: target.showMe,
               timeout: delay += config.hide_time * 1000
            });
            program.push({
               callback: target.hideMe,
               timeout: delay += config.show_time * 1000
            });
         };

         program.push({
            callback: end,
            timeout: delay += config.hide_after * 1000
         });
         
         target.showMe();

         console.log(JSON.stringify(program));

         advanced_timer.setMultipleTimeouts(program); 
      }
   };
})();

$(document).ready(function () {
   target.centerMe();
   $(window).on("orientationchange", target.centerMe);
   $(window).on("resize", target.centerMe);
   $("#target").flip(); 
   $("#a_skyting").click(target.centerMe);

   $("#start").click(function () {
      counter.restart();
      counter.start();
      var program = {
            show_before: $("#select-prologe").val(),
            hide_time: 7,
            show_time: $("#select-time").val(),
            repetitions: $("#select-reps").val(),
            hide_after: 15
      };  
      $.ajax({
         url: '/users',
         type: 'POST',
         data: JSON.stringify(program),
         dataType: "json",
         contentType: "application/json",
         success: function (items) {
         }
      });
      target_turner.run(program);
   });

   $("#stop").click(function () {
      counter.stop();
      var program = {
            show_before: 0,
            hide_time: 0,
            show_time: 0,
            repetitions: 0,
            hide_after: 0
      };  
      $.ajax({
         url: '/users',
         type: 'POST',
         data: JSON.stringify(program),
         dataType: "json",
         contentType: "application/json",
         success: function (items) {
         }
      });
      target_turner.run(program);
   });
});

/* 
 * Fin- & grovpistol presisjon
 *  60 - fremme (lading)
 *   7 - borte  \
 * 300 - fremme / * 1
 *  15 - borte 
 *   - - fremme 
 */

/* 
 * Fin- & grovpistol duell
 * 60 - fremme (lading)
 *  7 - borte  \
 *  3 - fremme / * 5
 * 15 - borte 
 *  - - fremme 
 */


/* 
 * Standard 150 sek
 *  60 - fremme (lading)
 *   7 - borte  \
 * 150 - fremme / * 1
 *  15 - borte 
 *   - - fremme 
 */

/* 
 * Standard 20 sek
 *  60 - fremme (lading)
 *   7 - borte  \
 *  20 - fremme / * 1
 *  15 - borte 
 *   - - fremme 
 */

/* 
 * Standard 10 sek
 *  60 - fremme (lading)
 *   7 - borte  \
 *  10 - fremme / * 1
 *  15 - borte 
 *   - - fremme 
 */

/* 
 * Hurtig 10 sek
 *  60 - fremme (lading)
 *   7 - borte  \
 *  10 - fremme / * 1
 *  15 - borte 
 *   - - fremme 
 */

/* 
 * Hurtig 8 sek
 *  60 - fremme (lading)
 *   7 - borte  \
 *   8 - fremme / * 1
 *  15 - borte 
 *   - - fremme 
 */

/* 
 * Hurtig 6 sek
 *  60 - fremme (lading)
 *   7 - borte  \
 *   6 - fremme / * 1
 *  15 - borte 
 *   - - fremme 
 */

/* 
 * Silhuett 8 sek
 *  60 - fremme (lading)
 *   7 - borte  \
 *   8 - fremme / * 1
 *  15 - borte 
 *   - - fremme 
 */

/* 
 * Silhuett 6 sek
 *  60 - fremme (lading)
 *   7 - borte  \
 *   6 - fremme / * 1
 *  15 - borte 
 *   - - fremme 
 */

/* 
 * Silhuett 4 sek
 *  60 - fremme (lading)
 *   7 - borte  \
 *   4 - fremme / * 1
 *  15 - borte 
 *   - - fremme 
 */

/* 
 * NAIS 150 sek
 *  60 - fremme (lading)
 *   7 - borte  \
 * 150 - fremme / * 1
 *  15 - borte 
 *   - - fremme 
 */

/* 
 * NAIS Duell
 * 60 - fremme (lading)
 *  7 - borte  \
 *  3 - fremme / * 5
 * 15 - borte 
 *  - - fremme 
 */

/* 
 * NAIS 20 sek
 *  60 - fremme (lading)
 *   7 - borte  \
 *  20 - fremme / * 1
 *  15 - borte 
 *   - - fremme 
 */

/* 
 * NAIS 10 sek
 *  60 - fremme (lading)
 *   7 - borte  \
 *  10 - fremme / * 1
 *  15 - borte 
 *   - - fremme 
 */

