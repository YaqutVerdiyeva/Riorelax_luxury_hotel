let BASE_URL = `http://localhost:3000/subscribes`;
let products = document.querySelector("tbody");
let searchInput = document.querySelector(".search");
let sortBtn = document.querySelector(".sort");
let emailInput = document.querySelector("#email");
let addEmail = document.querySelector(".button");
let sorted = "asc";
let filteredArr = [];
let copyArr = [];

async function getAllProducts() {
  let res = await axios(BASE_URL);
  let data = res.data;
  copyArr = data;
  products.innerHTML = "";
  filteredArr = filteredArr.length || searchInput.value ? filteredArr : data;
  filteredArr.forEach((el) => {
    products.innerHTML += `
    <div class="alert alert${el.id} mt-3" role="alert">
    <h4>Are you sure?</h4>
    <div>
    <button onclick=deleteUser(${el.id})>Yes</button>
    <button onclick=keepUser(${el.id})>No</button>
    </div>
   </div>
    <tr>
    <td style="background-color: transparent;">${el.id}</td>
    <td style="background-color: transparent;">${el.email}</td>
    <td style="background-color: transparent;">
      <a onclick="deleteBtn(${el.id})" style="margin-right: 8px"
        ><i class="fa-solid fa-trash" style="color: #c20000"></i
      ></a>
      <a href="#form" onclick="editUser(${el.id})"
        ><i class="fa-solid fa-pen-to-square" style="color: #000"></i
      ></a>
    </td>
  </tr>
          `;
  });
}
getAllProducts();

searchInput.addEventListener("input", function (e) {
  filteredArr = copyArr;
  filteredArr = filteredArr.filter((el) =>
    el.email.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );
  getAllProducts();
});

sortBtn.addEventListener("click", function () {
  if (sorted === "asc") {
    filteredArr.sort((a, b) => a.email.localeCompare(b.email));
    sorted = "dsc";
    sortBtn.innerHTML = "SORT A-Z";
  } else if (sorted === "dsc") {
    filteredArr.sort((a, b) => b.email.localeCompare(a.email));
    sorted = "def";
    sortBtn.innerHTML = "SORT Z-A";
  } else {
    filteredArr = copyArr;
    sorted = "asc";
    sortBtn.innerHTML = "SORT";
  }
  getAllProducts();
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
    (document.querySelector(`.alert${id}`).style.visibility = "hidden" ),
    2000
  );
}
let editStatus = false;
let editId;

addEmail.addEventListener("click", function () {
  if (!editStatus) {
    axios.post(`${BASE_URL}`, {
      email: emailInput.value,
    });
  } else {
    axios.patch(`${BASE_URL}/${editId}`, {
      email: emailInput.value,
    });
    editStatus = false;
  }
});

function editUser(id) {
  editStatus = true;
  editId = id;
  copyArr.filter((elem) => elem.id == id);
  axios(`${BASE_URL}/${id}`).then((res) => {
    emailInput.value = res.data.email;
  });
  document.querySelector(".title").innerHTML = "Edit Email";
  addEmail.innerHTML = "EDIT EMAIL";
}
function darkLightMode() {
  let body = document.body;
  body.classList.toggle("dark-mode");
}
