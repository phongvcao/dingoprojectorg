$(document).ready(function() {
  $("#left-button, #right-button").hide();
  
  $("#slides").slides({
    next : 'slides_right-button',
    prev : 'slides_left-button',
    pagination : false,
    generatePagination : false,
    play : 6000,
    pause : 2500,
    hoverPause : true
  });
  
  $(".slides_container").mouseenter(function() {
    $("#left-button, #right-button").show();
    $("#left-button, #right-button").addClass("rl-buttons-slides_container-mouseover");
  }).mouseleave(function() {
    $("#left-button, #right-button").hide();
    $("#left-button, #right-button").removeClass("rl-buttons-slides_container-mouseover");
  });
  
  $("#left-button").mouseover(function() {
    $(this).show();
    $("#right-button").show();
    
    $(this).addClass("rl-buttons-mouseover");
    $("#right-button").addClass("rl-buttons-slides_container-mouseover");
  }).mouseleave(function() {
    $(this).hide();
    $("#right-button").hide();
    
    $(this).removeClass("rl-buttons-mouseover");
  });
  
  $("#right-button").mouseover(function() {
    $(this).show();
    $("#left-button").show();
    
    $(this).addClass("rl-buttons-mouseover");
    $("#left-button").addClass("rl-buttons-slides_container-mouseover");
  }).mouseleave(function() {
    $(this).hide();
    $("#left-button").hide();
    
    $(this).removeClass("rl-buttons-mouseover");
  });
});
