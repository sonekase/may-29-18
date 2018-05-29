$(document).ready(function() {
  $("#pizza").fadeIn();
  $(".clickable1").click(function(){
    $(".pizza-showing1").show();
    $(".pizza-hidden1").hide();
  });
  $(".clickable2").click(function(){
    $(".pizza-showing2").show();
    $(".pizza-hidden2").hide();
  });
  $(".clickable3").click(function(){
    $(".pizza-showing3").show();
    $(".pizza-hidden3").hide();
  });
});
