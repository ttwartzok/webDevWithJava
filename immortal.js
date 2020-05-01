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
      alert("The username cannot be empty!");
      return false;
  }
  else if(!username.value.match(validWords)){
      alert("The username must have special characters");
      return false;
  }
  else if(password.value == ""){
      alert("The password cannot be empty!");
      return false;
  }
  else if(!password.value.match(validWords)){
      alert("The password must have special characters!");
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

function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address");
document.form1.text1.focus();
return false;
}
}

function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("notesBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
