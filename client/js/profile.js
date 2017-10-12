// $(document).ready(function() {
// $(".btn-pref .btn").click(function () {
//     $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
//     // $(".tab").addClass("active"); // instead of this do the below
//     $(this).removeClass("btn-default").addClass("btn-primary");
// });
// });
//
// var freedomTab = $("#freedomTab");
// var questionTab = $("questionTab");
//
// freedomTab.hide();
//
//
// $(document).ready(function(){
// $("freedomLbl").click(function(){
//   questionTab.hide();
//   freedomTab.show();
// });
// });
//
// $(document).ready(function(){
// $("#questionLbl").click(function(){
//   questionTab.show();
//   freedomTab.hide();
// });
// });

var sendMessage = $("#sendMessageForm");
var sendQuestion = $("#sendQuestionForm");

sendMessage.hide();
sendQuestion.hide();

function resetForm() {
  sendMessage.hide();
  sendQuestion.hide();
};

$(document).on("click", "#messageBtn", function(){
  resetForm();
  sendMessage.show();
});

$(document).on("click", "#askBtn", function(){
  resetForm();
  sendQuestion.show();
});
