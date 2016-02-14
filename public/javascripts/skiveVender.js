function centerElement(element){
   element.css("margin-left", element.parent().width() / 2 - element.width() / 2);
}


function centerTarget(){
   var container = $("#target_container");
   var target    = $("#target");
   var front_img = $("#front_img");
   var back_img  = $("#back_img");
   
   container.height(front_img.height());
   container.width("100%");

   centerElement(back_img);
   centerElement(front_img);
   centerElement(target);
}

function runTimerSeq(seq){
   for (var i in seq.timers){
      setTimeout(seq.flip, seq.timers[i].timeout, seq.timers[i].show);
   }
}

$(document).ready(function(){
   centerTarget();
   $(window).on("orientationchange", centerTarget);
   $(window).on("resize", centerTarget);
   $("#target").flip(); 
   $("#a_skyting").click(centerTarget);

   $("#start").click(function(){
      var skyteprogram = [{timeout : 1000, show : true}, 
                          {timeout : 2000, show : false},
                          {timeout : 3000, show : true},
                          {timeout : 4000, show : false}];
      var seq = {
         timers : skyteprogram,
         flip: function(show){
                  $("#target").flip(show); 
               }
      };
      $.ajax({
         url: '/users',
         type: 'post',
         data: {
            show_before: 600,
            hide_time: 7000,
            show_time: 3000,
            repetitions: 5,
            hide_after: 15000
         },
//         dataType: "json",
         success: function(items){
            
         }
      });
      runTimerSeq(seq);
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

