$(document).ready(function(){
    
    /*for the sticky nav*/
    $(".js--section--feature").waypoint(function(direction){
        if(direction == "down"){
           $("nav").addClass("sticky");
           }else{
           $("nav").removeClass("sticky");
           }
    }); 
 
    
    /*scroll the plain*/
    
    
    $(".js-plain").click(function(){
        $("html,body").animate({scrollTop: $(".js-section-plans").offset().top},1000);
    });
    
});
/*nav*/

$('a[href*="#"]')
  
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


/*animated
$(".js-op1").waypoint(function(direction){
    $(".js-op1").fadeIn();
    offset: "50%";
    
});
$(".js-op2").waypoint(function(direction){
    $(".js-op2").addClass("animated fadeInUp");
    offset: "50%";
    
});
$(".js-op3").waypoint(function(direction){
    $(".js-op3").addClass("animated fadeIn");
    offset: "50%";
    
});
$(".js-op4").waypoint(function(direction){
    $(".js-op4").addClass("animated pulse");
    offset: "50%";
    
});
*/

