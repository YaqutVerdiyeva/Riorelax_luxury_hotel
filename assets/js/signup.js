let BASE_URL = `http://localhost:3000/users`;
let firstName = document.querySelector(".firstname");
let lastName = document.querySelector(".lastname");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let signUpBtn = document.querySelector(".get-submit");

//post
signUpBtn.addEventListener("click", function () {
  if (firstName.value && lastName.value && email.value && password.value) {
    axios.post(`${BASE_URL}`, {
      firstname: firstName.value,
      lastname: lastName.value,
      email: email.value,
      password: password.value,
    });
    window.location = "login.html";
  }
  if (firstName.value == "") {
    document.querySelector(".validationname").style.visibility = "visible";
    firstName.style.border = "1px solid brown";
  }
  if (lastName.value == "") {
    document.querySelector(".validationlastname").style.visibility = "visible";
    lastName.style.border = "1px solid brown";
  }
  if (email.value == "") {
    document.querySelector(".validationemail").style.visibility = "visible";
    email.style.border = "1px solid brown";
  }
  if (password.value == "") {
    document.querySelector(".validationpassword").style.visibility = "visible";
    password.style.border = "1px solid brown";
  }
});
firstName.addEventListener("input", function () {
  document.querySelector(".validationname").style.visibility = "hidden";
  firstName.style.border = "";
});
lastName.addEventListener("input", function () {
  document.querySelector(".validationlastname").style.visibility = "hidden";
  lastName.style.border = "";
});
email.addEventListener("input", function () {
  document.querySelector(".validationemail").style.visibility = "hidden";
  email.style.border = "";
});
password.addEventListener("input", function () {
  document.querySelector(".validationpassword").style.visibility = "hidden";
  password.style.border = "";
});
