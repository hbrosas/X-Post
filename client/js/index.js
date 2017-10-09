var maindiv = $("#main"), logindiv = $("#login-cont"), otherdiv = $("#other-cont");
var openLogInForm = $("#openLogInForm"), openOthers = $("#openSignUpForm");
var logo = $("#logo"), error = $("#error");

$(document).ready(function() {
	logindiv.hide();
	otherdiv.hide();
	error.hide();

	$(document).on("click", "#openLogInForm", function() {
		logo.hide();
		maindiv.hide();
		logindiv.show(500);
	});

	$(document).on("click", "#back", function() {
		logo.show();
		maindiv.show();
		logindiv.hide();
		otherdiv.hide();
	});

	$(document).on("click", "#openSignUpForm", function() {
		logo.hide();
		maindiv.hide();
		otherdiv.show(500);
	});
});
function checkPass()
	{
			//Store the password field objects into variables ...
			var pass1 = document.getElementById('inputPassword1');
			var pass2 = document.getElementById('inputConfirmPassword');
			//Store the Confimation Message Object ...
			var message = document.getElementById('passwordMatch');
			//Set the colors we will be using ...
			var goodColor = "transparent";
			var badColor = "red";
			//Compare the values in the password field
			//and the confirmation field
			if(pass1.value == pass2.value){
					//The passwords match.
					//Set the color to the good color and inform
					//the user that they have entered the correct password
					//pass2.style.backgroundColor = goodColor;
					message.style.color = "green";
					message.innerHTML = "Passwords Match!";
					document.getElementById("btnSignUp").disabled = false;
			}else{
					//The passwords do not match.
					//Set the color to the bad color and
					//notify the user.
					//pass2.style.backgroundColor = goodColor;
					message.style.color = badColor;
					message.innerHTML = "Passwords Do Not Match!";
					document.getElementById("btnSignUp").disabled = true;
			}
	}
