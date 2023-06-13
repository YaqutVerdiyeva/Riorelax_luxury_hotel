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
  // if (
  //   email.value == "" &&
  //   lastName.value == "" &&
  //   firstName.value == "" &&
  //   password.value == ""
  // ) {
  //   lastName.style.border = "1px solid brown";
  //   lastName.style.transition = "0.8s";
  //   firstName.style.border = "1px solid brown";
  //   firstName.style.transition = "0.8s";
  //   email.style.border = "1px solid brown";
  //   email.style.transition = "0.8s";
  //   password.style.border = "1px solid brown";
  //   password.style.transition = "0.8s";

  //   document.querySelector(".validationname").style.color = "brown";
  //   document.querySelector(".validationname").style.transition = "2s";
  //   document.querySelector(".validationlastname").style.color = "brown";
  //   document.querySelector(".validationlastname").style.transition = "2s";
  //   document.querySelector(".validationemail").style.color = "brown";
  //   document.querySelector(".validationemail").style.transition = "2s";
  //   document.querySelector(".validationpassword").style.color = "brown";
  //   document.querySelector(".validationpassword").style.transition = "2s";
  // } else if (firstName.value) {
  //   lastName.style.border = "1px solid brown";
  //   lastName.style.transition = "0.8s";
  //   email.style.border = "1px solid brown";
  //   email.style.transition = "0.8s";
  //   password.style.border = "1px solid brown";
  //   password.style.transition = "0.8s";
  //   document.querySelector(".validationlastname").style.color = "brown";
  //   document.querySelector(".validationlastname").style.transition = "2s";
  //   document.querySelector(".validationemail").style.color = "brown";
  //   document.querySelector(".validationemail").style.transition = "2s";
  //   document.querySelector(".validationpassword").style.color = "brown";
  //   document.querySelector(".validationpassword").style.transition = "2s";
  // } else if (lastName.value) {
  //   firstName.style.border = "1px solid brown";
  //   firstName.style.transition = "0.8s";
  //   email.style.border = "1px solid brown";
  //   email.style.transition = "0.8s";
  //   password.style.border = "1px solid brown";
  //   password.style.transition = "0.8s";
  //   document.querySelector(".validationname").style.color = "brown";
  //   document.querySelector(".validationname").style.transition = "2s";
  //   document.querySelector(".validationemail").style.color = "brown";
  //   document.querySelector(".validationemail").style.transition = "2s";
  //   document.querySelector(".validationpassword").style.color = "brown";
  //   document.querySelector(".validationpassword").style.transition = "2s";
  // } else if (email.value) {
  //   lastName.style.border = "1px solid brown";
  //   lastName.style.transition = "0.8s";
  //   firstName.style.border = "1px solid brown";
  //   firstName.style.transition = "0.8s";
  //   password.style.border = "1px solid brown";
  //   password.style.transition = "0.8s";
  //   document.querySelector(".validationname").style.color = "brown";
  //   document.querySelector(".validationname").style.transition = "2s";
  //   document.querySelector(".validationlastname").style.color = "brown";
  //   document.querySelector(".validationlastname").style.transition = "2s";
  //   document.querySelector(".validationpassword").style.color = "brown";
  //   document.querySelector(".validationpassword").style.transition = "2s";
  // } else if (password.value) {
  //   lastName.style.border = "1px solid brown";
  //   lastName.style.transition = "0.8s";
  //   firstName.style.border = "1px solid brown";
  //   firstName.style.transition = "0.8s";
  //   email.style.border = "1px solid brown";
  //   email.style.transition = "0.8s";
  //   document.querySelector(".validationname").style.color = "brown";
  //   document.querySelector(".validationname").style.transition = "2s";
  //   document.querySelector(".validationlastname").style.color = "brown";
  //   document.querySelector(".validationlastname").style.transition = "2s";
  //   document.querySelector(".validationemail").style.color = "brown";
  //   document.querySelector(".validationemail").style.transition = "2s";
  // }
});

// firstName.addEventListener("input", function () {
//   firstName.style.border = "";
//   document.querySelector(".validationname").style.color = "white";
//   document.querySelector(".validationname").style.transition = "0.2s";
// });
// lastName.addEventListener("input", function () {
//   lastName.style.border = "";
//   document.querySelector(".validationlastname").style.color = "white";
//   document.querySelector(".validationlastname").style.transition = "0.2s";
// });
// email.addEventListener("input", function () {
//   document.querySelector(".validationemail").style.color = "white";
//   document.querySelector(".validationemail").style.transition = "0.2s";

//   email.style.border = "";
// });
// password.addEventListener("input", function () {
//   document.querySelector(".validationpassword").style.color = "white";
//   document.querySelector(".validationpassword").style.transition = "0.2s";

//   password.style.border = "";
// });
