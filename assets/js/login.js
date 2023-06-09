let BASE_URL = `http://localhost:3000/users`;
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let login = document.querySelector(".get-submit");
login.addEventListener("click", async function () {
  let res = await axios(BASE_URL);
  let data = await res.data;
  console.log(data);
  if (data.find((item) => item.email == email.value)) {
    window.location = `index.html`;
  } else {
    alert("You are not user");
  }
});
