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
});
