$(document).ready(function() {
  $("#pizza").fadeIn();
  $(".clickable1").click(function(){
    $(".pizza-showing1").toggle();
    $(".pizza-hidden1").toggle();
  });
  $(".clickable2").click(function(){
    $(".pizza-showing2").toggle();
    $(".pizza-hidden2").toggle();
  });
  $(".clickable3").click(function(){
    $(".pizza-showing3").toggle();
    $(".pizza-hidden3").toggle();
  });

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });
  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });
  $("button#red").click(function() {
    $("body").toggleClass("red-background");
  });
});
