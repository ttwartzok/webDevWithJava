function showDeals(){  
    var string = document.getElementsByClassName("price");
    var sLength = string.length;
    for (var i=0;i<sLength;i++){
        var element = string[i].innerHTML;
        var tstring = element.substring(2);
        tstring = parseFloat(tstring.replace(/,/g, ''));
        if(tstring<=50000){

            string[i].style.color = "lightgreen";
            }
        if(tstring>50000&&tstring<399999){
            string[i].style.color="yellow";
            }
        if(tstring>=400000){
            string[i].style.color="red";
            }

        
    

    }
}
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
window.onload = showDeals;
