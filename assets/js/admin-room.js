let BASE_URL = `http://localhost:3000/rooms`;
let rooms = document.querySelector("tbody");
let searchInput = document.querySelector(".search");
let sortBtn = document.querySelector(".sort");
let titleInput = document.querySelector("#title");
let priceInput = document.querySelector(".price");
let photoInput = document.querySelector(".photo");
let addRoom = document.querySelector(".add-room");
let sorted = "asc";
let filteredArr = [];
let copyArr = [];

async function getAllRooms() {
  let res = await axios(BASE_URL);
  let data = res.data;
  copyArr = data;
  rooms.innerHTML = "";
  filteredArr = filteredArr.length || searchInput.value ? filteredArr : data;
  filteredArr.forEach((el) => {
    rooms.innerHTML += `
    <tr>
    <td>${el.id}</td>
    <td><img width="60px" src="${el.photo}" alt="" /></td>
    <td>${el.title}</td>
    <td>${el.price}$</td>
    <td>
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
getAllRooms();

searchInput.addEventListener("input", function (e) {
  filteredArr = copyArr;
  filteredArr = filteredArr.filter((el) =>
    el.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );
  getAllRooms();
});

sortBtn.addEventListener("click", function () {
  if (sorted === "asc") {
    filteredArr.sort((a, b) => a.price - b.price);
    sorted = "dsc";
    sortBtn.innerHTML = "SORT Low to High";
  } else if (sorted === "dsc") {
    filteredArr.sort((a, b) => b.price - a.price);
    sorted = "def";
    sortBtn.innerHTML = "SORT High to Low";
  } else {
    filteredArr = copyArr;
    sorted = "asc";
    sortBtn.innerHTML = "SORT";
  }
  getAllRooms();
});
function deleteBtn(id) {
  axios.delete(`${BASE_URL}/${id}`);
}
let editStatus = false;
let editId;
addRoom.addEventListener("click", function () {
  if (!editStatus) {
    axios.post(`${BASE_URL}`, {
      photo: `./assets/image/${photoInput.value.split("\\")[2]}`,
      title: titleInput.value,
      price: priceInput.value,
    });
  } else {
    axios.patch(`${BASE_URL}/${editId}`, {
      photo: `./assets/image/${photoInput.value.split("\\")[2]}`,
      title: titleInput.value,
      price: priceInput.value,
    });
    editStatus = false;
  }
});

function editUser(id) {
  editStatus = true;
  editId = id;
  copyArr.filter((elem) => elem.id == id);
  axios(`${BASE_URL}/${id}`).then((res) => {
    priceInput.value = res.data.price;
    titleInput.value = res.data.title;
  });
  document.querySelector(".title").innerHTML = "Edit Room";
  addRoom.innerHTML = "EDIT ROOM";
}
