let BASE_URL = `http://localhost:3000/users`;
let users = document.querySelector("tbody");
let searchInput = document.querySelector(".search");
let sortBtn = document.querySelector(".sort");
let firstName = document.querySelector(".firstname");
let lastName = document.querySelector(".lastname");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let signUpBtn = document.querySelector(".get-submit");
let sorted = "asc";
let filteredArr = [];
let copyArr = [];

async function getAllUsers() {
  let res = await axios(BASE_URL);
  let data = res.data;
  copyArr = data;
  users.innerHTML = "";
  filteredArr = filteredArr.length || searchInput.value ? filteredArr : data;
  filteredArr.forEach((el) => {
    users.innerHTML += `
      <tr>
                    <th>${el.id}</th>
                    <td>${el.firstname}</td>
                    <td>${el.lastname}</td>
                    <td>${el.email}</td>
                    <td>${el.password}</td>
                    <td>
                    <a onclick=deleteBtn(${el.id}) style="margin-right: 8px"><i class="fa-solid fa-trash" style="color: #c20000;"></i></a>
                    <a href="#form" onclick=editUser(${el.id})  ><i class="fa-solid fa-pen-to-square" style="color: #000;"></i></a>
                    </td>
                  </tr>
          `;
  });
}
getAllUsers();

searchInput.addEventListener("input", function (e) {
  filteredArr = copyArr;
  filteredArr = filteredArr.filter((el) =>
  `${el.firstname} ${el.lastname}`
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase())
  );
  getAllUsers();
});

sortBtn.addEventListener("click", function () {
  if (sorted === "asc") {
    filteredArr.sort((a, b) => a.id - b.id);
    sorted = "dsc";
    sortBtn.innerHTML = "SORT Low to High";
  } else if (sorted === "dsc") {
    filteredArr.sort((a, b) => b.id - a.id);
    sorted = "def";
    sortBtn.innerHTML = "SORT High to Low";
  } else {
    filteredArr = copyArr;
    sorted = "asc";
    sortBtn.innerHTML = "SORT";
  }
  getAllUsers();
});
function deleteBtn(id) {
  axios.delete(`${BASE_URL}/${id}`);
}
let editStatus = false;
let editId;
signUpBtn.addEventListener("click", function (id) {
  if (!editStatus) {
    axios.post(`${BASE_URL}`, {
      firstname: firstName.value,
      lastname: lastName.value,
      email: email.value,
      password: password.value,
    });
  } else {
    axios.patch(`${BASE_URL}/${editId}`, {
      firstname: firstName.value,
      lastname: lastName.value,
      email: email.value,
      password: password.value, 
    });
    editStatus = false;
  }
});


function editUser(id) {
  editStatus = true;
  editId = id;
  copyArr.filter((elem) => elem.id == id);
  axios(`${BASE_URL}/${id}`).then((res) => {
    firstName.value = res.data.firstname;
    lastName.value = res.data.lastname;
    email.value = res.data.email;
    password.value = res.data.password;
  });
  document.querySelector(".title").innerHTML="Edit User"
  signUpBtn.innerHTML="Edit User"
}
