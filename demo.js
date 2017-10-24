$(document).ready(function() {
  $("#menu ul li:first").addClass("selected");
  $("sectionF article:nth-child(2)").addClass("middle");
  $(".list-item:odd").addClass("highlighted");
  $(".list-item:last-of-type").css("border", "1px solid #eee");
  $("input").focus(function() {
    $(this).css("border", "1px solid #eee");
  });

  $("input").blur(function() {
    $(this).css("border", "");
  });

});
