let BASE_URL = `http://localhost:3000/users`;
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let login = document.querySelector(".get-submit");
login.addEventListener("click", async function () {
  let res = await axios(BASE_URL);
  let data = await res.data;
  if (
    data.find(
      (item) => item.email == email.value && item.password == password.value
    )
  ) {
    localStorage.setItem("users", JSON.stringify(true));
    window.location = `index.html`;
  }
  if (email.value == "yaqut@gmail.com" && password.value == 123456) {
    window.location = `./admin/admin.html`;
    localStorage.setItem("admin", JSON.stringify(true));
  }

  if (data.find((item) => item.email != email.value)) {
    document.querySelector(".email-alert").style.visibility = "visible";
    email.style.border = "1px solid brown";
  }
  if (data.find((item) => item.email == email.value)) {
    document.querySelector(".email-alert").style.visibility = "hidden";
    email.style.border = "";
  }
  if (data.find((item) => item.password != password.value)) {
    document.querySelector(".password-alert").style.visibility = "visible";
    password.style.border = "1px solid brown";
  }
  if (data.find((item) => item.password == password.value)) {
    document.querySelector(".password-alert").style.visibility = "hidden";
    password.style.border = "";
  }
});

email.addEventListener("input", function () {
  document.querySelector(".email-alert").style.visibility = "hidden";
  email.style.border = "";
});
password.addEventListener("input", function () {
  document.querySelector(".password-alert").style.visibility = "hidden";
  password.style.border = "";
});
