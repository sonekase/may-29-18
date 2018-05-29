$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
});
$(document).ready(function() {
  $(".headingfader").fadeIn().delay( 8000 ).fadeOut();
});
