let BASE_URL_SUBSCRIBE = `http://localhost:3000/subscribes`;
let BASE_URL_CONTACT = `http://localhost:3000/contact`;
let subscribesBtn = document.querySelector(".subscribe-btn");
let footInput = document.querySelector(".email-inputt");
let firstnameInput = document.querySelector(".firstname");
let emailInput = document.querySelector(".email");
let phoneInput = document.querySelector(".phone");
let subjectInput = document.querySelector(".subject");
let textInput = document.querySelector(".text");
let submitBtn = document.querySelector(".get-submit");

subscribesBtn.addEventListener("click", function () {
  if (footInput.value !== "") {
    axios.post(`${BASE_URL_SUBSCRIBE}`, {
      email: footInput.value,
    });
  }
});

submitBtn.addEventListener("click", function () {
  if (
    firstnameInput.value &&
    emailInput.value &&
    phoneInput.value &&
    subjectInput.value &&
    textInput.value
  ) {
    axios.post(BASE_URL_CONTACT, {
      firstname: firstnameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      subject: subjectInput.value,
      text: textInput.value,
    });
  }
});
