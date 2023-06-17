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
    <div class="alert alert${el.id} mt-3" role="alert">
    <h4>Are you sure?</h4>
    <div>
    <button onclick=deleteUser(${el.id})>Yes</button>
    <button onclick=keepUser(${el.id})>No</button>
    </div>
   </div>
    <tr>
    <td style="background-color: transparent;">${el.id}</td>
    <td style="background-color: transparent;"><img width="60px" src="${el.photo}" alt="" /></td>
    <td style="background-color: transparent;">${el.title}</td>
    <td style="background-color: transparent;">${el.price}$</td>
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
let editStatus = false;
let editId;
let base64;
const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
const uploadImage = async (event) => {
  const file = event.target.files[0];
  base64 = await convertBase64(file);
};

photoInput.addEventListener("change", (e) => {
  uploadImage(e);
});
addRoom.addEventListener("click", function () {
  if (!editStatus) {
    if (titleInput.value && priceInput.value) {
      axios.post(`${BASE_URL}`, {
        photo: base64,
        title: titleInput.value,
        price: priceInput.value,
      });
    }
  } else {
    axios.patch(`${BASE_URL}/${editId}`, {
      photo: base64,
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
function darkLightMode() {
  let body = document.body;
  body.classList.toggle("dark-mode");
}
