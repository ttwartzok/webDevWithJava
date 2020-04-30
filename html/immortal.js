function checkLoginInput(password,username){
      var pwInput = password;
      var validWords = /^[a-zA-Z0-9]+$/;

	if(username.value == ""){
		alert("The Username cannot be empty!");
		return false;
	}
	else if(pwInput.value == ""){
		alert("The password cannot be empty!");
		return false;
	}
	else if(!pwInput.value.match(validWords)){
		alert("The password will not have any special character!");
		return false;
	}
	else if (password.value.length < 8){
		alert("The password will not have less than 8 characters!");
		return false;
	}
	
   }


function checkSignUpInput(username,password,password2){
      var validWords = /^[a-zA-Z0-9]+$/;

	if(username.value == ""){
		alert("The Username cannot be empty!");
		return false;
	}
	else if(!username.value.match(validWords)){
		alert("The username cannot have any special character!");
		return false;
	}
	else if(password.value == ""){
		alert("The password cannot be empty!");
		return false;
	}
	else if(!password.value.match(validWords)){
		alert("The password cannot have any special character!");
		return false;
	}
	else if (password.value.length < 8){
		alert("The password will not have less than 8 characters!");
		return false;
	}
	else if (password2.value != password.value){
		alert("You need to re-enter the password you enter above");
		return false;
	}
	
   }
