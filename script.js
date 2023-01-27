
let userNameError = document.getElementById('userNameError');
let userPassError = document.getElementById('userPasswordError')
let formContainer = document.getElementById('formContainer')
let homeDetails = document.getElementById('homeDetails');
function checkPasswordValidity(password) {

    const isContainsUppercase = /^(?=.*[A-Z])/;
    const isContainsLowercase = /^(?=.*[a-z])/;
    const isContainsNumber = /^(?=.*[0-9])/;
    const isContainsSymbol =
        /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
    const isValidLength = /^.{8,16}$/;
    userPassError.style.display = "block";
    if (password === '') {
        userPassError.innerHTML = "Please enter your password!!!"
    }
    else {
        if (!isContainsUppercase.test(password)) {
            userPassError.innerHTML = "Password must have at least one Uppercase Character.";
        }

        else if (!isContainsLowercase.test(password)) {
            userPassError.innerHTML = "Password must have at least one Lowercase Character.";
        }
        else if (!isContainsNumber.test(password)) {
            userPassError.innerHTML = "Password must contain at least one Digit.";
        }

        else if (!isContainsSymbol.test(password)) {
            userPassError.innerHTML = "Password must contain at least one Special Symbol.";
        }
        else if (!isValidLength.test(password)) {
            userPassError.innerHTML = "Password must be 8-16 Characters Long.";
        }
        else {
            userPassError.style.display = "none";
            return true;
        }
    }
    return false;

}

function checkUserNameDetails(userName) {
    const isContainsSymbol =
        /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
        userNameError.style.display = 'block';
    if (userName === '') {
        userNameError.innerHTML = "Please give valid username!!!";
        userNameError.style.display = 'block';
        return false;
    }
    else {

        if (isContainsSymbol.test(userName)) {
            userNameError.innerHTML = "UserName should not  Special Symbol.";
        }
        else {

            userNameError.style.display = 'none';
            return true;
        }
        return false;
    }
}

function showHomeDetails() {
    let userNameDisplay = localStorage.getItem("UserName");
    console.log(userNmaeDisplay);
    let userNameDisplayElement=document.getElementById('userNameDisplay').innerHTML;
    if (userNameDisplay !== null) {
        formContainer.style.display = "none";
        userNameDisplayElement= userNameDisplay;
        homeDetails.style.display = "block";

    }
    else {
        formContainer.style.display = "flex";
    }
}


function checkLoginDetails() {
    let userName = document.getElementById('userName').value;
    let userpassword = document.getElementById('userPassword').value;

    let userNameDetailsConfirm=checkUserNameDetails(userName);
    let userPasswordDetailsConfirm=checkPasswordValidity(userpassword);

    if (userNameDetailsConfirm && userPasswordDetailsConfirm) {
        localStorage.setItem("UserName", userName);
        showHomeDetails();
    }
}

function logoutFromHomePage() {
    localStorage.clear();
    location.reload();
}

showHomeDetails();