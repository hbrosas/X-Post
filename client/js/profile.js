$(document).ready(function() {
$(".btn-pref .btn").click(function () {
    $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
    // $(".tab").addClass("active"); // instead of this do the below
    $(this).removeClass("btn-default").addClass("btn-primary");
});
});

var freedomTab = $("#freedomTab");
var questionTab = $("questionTab");

freedomTab.hide();


$(document).ready(function(){
$("freedomLbl").click(function(){
  questionTab.hide();
  freedomTab.show();
});
});

$(document).ready(function(){
$("#questionLbl").click(function(){
  questionTab.show();
  freedomTab.hide();
});
});
