let BASE_URL = `http://localhost:3000/users`;
let users = document.querySelector("tbody");
let searchInput = document.querySelector(".search");
let sortBtn = document.querySelector(".sort");
let firstName = document.querySelector(".firstname");
let lastName = document.querySelector(".lastname");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let isAdmin = document.querySelector(".isadmin");
let signUpBtn = document.querySelector(".get-submit");
let toggleBtn = document.querySelector(".toggle-btn-user");
let theme = document.querySelector("body");
let darkMode = localStorage.getItem("dark-mode-user");
let sorted = "asc";
let filteredArr = [];
let copyArr = [];
let editStatus = false;
let editId;

async function getAllUsers() {
  let res = await axios(BASE_URL);
  let data = res.data;
  copyArr = data;
  users.innerHTML = "";
  filteredArr = filteredArr.length || searchInput.value ? filteredArr : data;
  filteredArr.forEach((el) => {
    users.innerHTML += `
    <div class="alert alert${el.id} mt-3" role="alert">
    <h4>Are you sure?</h4>
    <div>
    <button onclick=deleteUser(${el.id})>Yes</button>
    <button onclick=keepUser(${el.id})>No</button>
    </div>
   </div>
      <tr>
                    <th style="background-color: transparent;">${el.id}</th>
                    <td style="background-color: transparent;">${el.firstname}</td>
                    <td style="background-color: transparent;">${el.lastname}</td>
                    <td style="background-color: transparent;">${el.email}</td>
                    <td style="background-color: transparent;">${el.password}</td>
                    <td style="background-color: transparent;"><button onclick=isadminuser(${el.id}) class="btn btn-dark">${el.isadmin}</button></td>
                    <td style="background-color: transparent;">
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
    `${el.firstname} ${el.lastname} ${el.email}`
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase())
  );
  getAllUsers();
});

sortBtn.addEventListener("click", function () {
  if (sorted === "asc") {
    filteredArr.sort((a, b) => a.firstname.localeCompare(b.firstname));
    sorted = "dsc";
    sortBtn.innerHTML = "SORT A-Z";
  } else if (sorted === "dsc") {
    filteredArr.sort((a, b) => b.firstname.localeCompare(a.firstname));
    sorted = "def";
    sortBtn.innerHTML = "SORT Z-A";
  } else {
    filteredArr = copyArr;
    sorted = "asc";
    sortBtn.innerHTML = "SORT";
  }
  getAllUsers();
});

function deleteBtn(id) {
  document.querySelector(`.alert${id}`).style.visibility = "visible";
}

function deleteUser(id) {
  axios.delete(`${BASE_URL}/${id}`);
}

function keepUser(id) {
  setTimeout(
    (document.querySelector(`.alert${id}`).style.visibility = "hidden"),
    2000
  );
}

signUpBtn.addEventListener("click", function (id) {
  if (!editStatus) {
    if (firstName.value && lastName.value && email.value && password.value) {
      axios.post(`${BASE_URL}`, {
        firstname: firstName.value,
        lastname: lastName.value,
        email: email.value,
        password: password.value,
        isadmin: false,
      });
    }
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
  document.querySelector(".title").innerHTML = "Edit User";
  signUpBtn.innerHTML = "EDIT USER";
}

let enableDarkMode = () => {
  theme.classList.add("dark-mode");
  toggleBtn.classList.remove("dark-mode");
  localStorage.setItem("dark-mode-user", "enabled");
};

let disableDarkMode = () => {
  theme.classList.remove("dark-mode");
  toggleBtn.classList.add("dark-mode");
  localStorage.setItem("dark-mode-user", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode();
}

toggleBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode-user");
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
async function isadminuser(id) {
  console.log(id);
  let res = await axios(`${BASE_URL}/${id}`);
  let isAdminn = res.data.isadmin;
  await axios.patch(`${BASE_URL}/${id}`, { isadmin: !isAdminn });
}
