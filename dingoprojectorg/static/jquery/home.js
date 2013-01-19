$(document).ready(function() {
  $("#left-button, #right-button").addClass("rl-buttons-mouseleave");
  
  $("#slides").slides({
    next : 'slides_right-button',
    prev : 'slides_left-button',
    pagination : false,
    generatePagination : false,
    play : 6000,
    pause : 2500,
    hoverPause : true
  }).mouseover(function() {
    $("#left-button, #right-button").removeClass("rl-buttons-mouseleave");
    $("#left-button, #right-button").addClass("rl-buttons-mouseover");
  }).mouseleave(function() {
    $("#left-button, #right-button").removeClass("rl-buttons-mouseover");
    $("#left-button, #right-button").addClass("rl-buttons-mouseleave");
  });
  
  $("#left-button, #right-button").mouseover(function() {
    $(this).addClass("rl-buttons-hover");
  }).mouseleave(function() {
    $(this).removeClass("rl-buttons-hover");  
  });
});
