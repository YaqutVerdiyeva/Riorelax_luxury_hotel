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
let sorted = "asc";
let filteredArr = [];
let copyArr = [];

async function getAllReservations() {
  let res = await axios(BASE_URL);
  let data = res.data;
  copyArr = data;
  reservations.innerHTML = "";
  filteredArr = filteredArr.length || searchInput.value ? filteredArr : data;
  filteredArr.forEach((el) => {
    reservations.innerHTML += `
      <tr>
                    <td>${el.id}</td>
                    <td>${el.firstname}</td>
                    <td>${el.email}</td>
                    <td>${el.phone}</td>
                    <td>${el.subject}</td>
                    <td>${el.text}</td>
                    <td>
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
  getAllReservations();
});
function deleteBtn(id) {
  axios.delete(`${BASE_URL}/${id}`);
}
let editStatus = false;
let editId;
submitBtn.addEventListener("click", function () {
  if (!editStatus) {
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
