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
  }
  if (
    email.value == "" ||
    lastName.value == "" ||
    firstName.value == "" ||
    password.value
  ) {
    lastName.style.border = "2px solid brown";
    firstName.style.border = "2px solid brown";
    email.style.border = "2px solid brown";
    password.style.border = "2px solid brown";
    document.querySelector(".validationname").style.display = "block";
    document.querySelector(".validationlastname").style.display = "block";
    document.querySelector(".validationemail").style.display = "block";
    document.querySelector(".validationpassword").style.display = "block";
  }
});
firstName.addEventListener("input", function () {
  firstName.style.border = "";
  document.querySelector(".validationname").style.display = "none";
});
lastName.addEventListener("input", function () {
  lastName.style.border = "";
  document.querySelector(".validationlastname").style.display = "none";
});
email.addEventListener("input", function () {
  document.querySelector(".validationemail").style.display = "none";
  email.style.border = "";
});
password.addEventListener("input", function () {
  document.querySelector(".validationpassword").style.display = "none";
  password.style.border = "";
});
