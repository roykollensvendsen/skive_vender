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
         data: {one : {timeout: 1000, show: true }},
         dataType: "json",
         success: function(items){
            
         }
      });
      runTimerSeq(seq);
   });

});
