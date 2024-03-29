let BASE_URL = `http://localhost:3000/contact`;
let reservations = document.querySelector("tbody");
let searchInput = document.querySelector(".search");
let sortBtn = document.querySelector(".sort");
let firstnameInput = document.querySelector(".firstname");
let emailInput = document.querySelector(".email");
let phoneInput = document.querySelector(".phone");
let subjectInput = document.querySelector(".subject");
let textInput = document.querySelector(".textarea");
let submitBtn = document.querySelector(".get-submit");
let toggleBtn = document.querySelector(".toggle-btn-contact");
let theme = document.querySelector("body");
let darkMode = localStorage.getItem("dark-mode-contac");
let sorted = "asc";
let filteredArr = [];
let copyArr = [];
let editStatus = false;
let editId;

async function getAllReservations() {
  let res = await axios(BASE_URL);
  let data = res.data;
  copyArr = data;
  reservations.innerHTML = "";
  filteredArr = filteredArr.length || searchInput.value ? filteredArr : data;
  filteredArr.forEach((el) => {
    reservations.innerHTML += `
    <div class="alert alert${el.id} mt-3" role="alert">
    <h4>Are you sure?</h4>
    <div>
    <button onclick=deleteUser(${el.id})>Yes</button>
    <button onclick=keepUser(${el.id})>No</button>
    </div>
   </div>
      <tr>
                    <td style="background-color: transparent;">${el.id}</td>
                    <td style="background-color: transparent;">${el.firstname}</td>
                    <td style="background-color: transparent;">${el.email}</td>
                    <td style="background-color: transparent;">+${el.phone}</td>
                    <td style="background-color: transparent;">${el.subject}</td>
                    <td style="background-color: transparent;">${el.text}</td>
                    <td style="background-color: transparent;">
                    <a onclick=deleteBtn(${el.id}) style="margin-right: 8px"><i class="fa-solid fa-trash" style="color: #c20000;"></i></a>
                    <a href="#form" onclick=editUser(${el.id})  ><i class="fa-solid fa-pen-to-square" style="color: #000;"></i></a>
                    </td>
                  </tr>
          `;
  });
}
getAllReservations();

searchInput.addEventListener("input", function (e) {
  filteredArr = copyArr;
  filteredArr = filteredArr.filter((el) =>
    el.firstname
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase())
  );
  getAllReservations();
});

sortBtn.addEventListener("click", function () {
  if (sorted === "asc") {
    filteredArr.sort((a, b) => a.firstname.localeCompare(b.firstname));
    sorted = "dsc";
    sortBtn.innerHTML = "SORT A-Z";
  } else if (sorted === "dsc") {
    filteredArr.sort((a, b) => b.firstname.localeCompare(a.firstname));
    sorted = "def";
    sortBtn.innerHTML = "Z-A";
  } else {
    filteredArr = copyArr;
    sorted = "asc";
    sortBtn.innerHTML = "SORT";
  }
  getAllReservations();
});

function deleteBtn(id) {
  document.querySelector(`.alert${id}`).style.visibility = "visible";
}

function deleteUser(id) {
  axios.delete(`${BASE_URL}/${id}`);
  console.log(id);
}

function keepUser(id) {
  setTimeout(
    (document.querySelector(`.alert${id}`).style.visibility = "hidden"),
    2000
  );
}

submitBtn.addEventListener("click", function () {
  if (!editStatus) {
    if (
      firstnameInput.value &&
      emailInput.value &&
      phoneInput.value &&
      subjectInput.value &&
      textInput.value
    )
      axios.post(`${BASE_URL}`, {
        firstname: firstnameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        subject: subjectInput.value,
        text: textInput.value,
      });
  } else {
    axios.patch(`${BASE_URL}/${editId}`, {
      firstname: firstnameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      subject: subjectInput.value,
      text: textInput.value,
    });
    editStatus = false;
  }
});

function editUser(id) {
  editStatus = true;
  editId = id;
  copyArr.filter((elem) => elem.id == id);
  axios(`${BASE_URL}/${id}`).then((res) => {
    firstnameInput.value = res.data.firstname;
    emailInput.value = res.data.email;
    phoneInput.value = res.data.phone;
    subjectInput.value = res.data.subject;
    textInput.value = res.data.text;
  });
  document.querySelector(".title").innerHTML = "Edit Contact";
  submitBtn.innerHTML = "EDIT CONTACT";
}

let enableDarkMode = () => {
  theme.classList.add("dark-mode");
  toggleBtn.classList.remove("dark-mode");
  localStorage.setItem("dark-mode-contac", "enabled");
};

let disableDarkMode = () => {
  theme.classList.remove("dark-mode");
  toggleBtn.classList.add("dark-mode");
  localStorage.setItem("dark-mode-contac", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode();
}

toggleBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode-contac");
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
