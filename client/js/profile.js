



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
