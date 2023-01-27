
let userNameError=document.getElementById('userNameError');
let userPassError=document.getElementById('userPasswordError')
function checkPasswordValidity(password){

    const isContainsUppercase = /^(?=.*[A-Z])/;
    const isContainsLowercase = /^(?=.*[a-z])/;
    const isContainsNumber = /^(?=.*[0-9])/;
    const isContainsSymbol =
      /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
    const isValidLength = /^.{8,16}$/;
    userPassError.style.display="block";
    if(password===''){
        userPassError.innerHTML="Please enter your password!!!"
    }
    else{
        if (!isContainsUppercase.test(password)) {
            userPassError.innerHTML= "Password must have at least one Uppercase Character.";
          }
      
      
          else if (!isContainsLowercase.test(password)) {
            userPassError.innerHTML=  "Password must have at least one Lowercase Character.";
          }
          else if (!isContainsNumber.test(password)) {
              userPassError.innerHTML=   "Password must contain at least one Digit.";
          }
      
          else if (!isContainsSymbol.test(password)) {
              userPassError.innerHTML=   "Password must contain at least one Special Symbol.";
          }
          else if (!isValidLength.test(password)) {
              userPassError.innerHTML=   "Password must be 8-16 Characters Long.";
          }
          else{
              userPassError.style.display="none";
          }
    }
   
}


function checkLoginDetails(){
    let userName=document.getElementById('userName').value;
    let userpassword=document.getElementById('userPassword').value;

    if(userName===''){
        userNameError.innerHTML="Please give valid username!!!";
        userNameError.style.display='block';
    }
    else{
        userNameError.style.display='none';
    }
    checkPasswordValidity(userpassword);
}