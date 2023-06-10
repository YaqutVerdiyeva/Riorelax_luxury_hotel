let BASE_URL = `http://localhost:3000/shop`;
let products = document.querySelector("tbody");
let searchInput = document.querySelector(".search");
let sortBtn = document.querySelector(".sort");
let titleInput = document.querySelector("#title");
let aboutInput = document.querySelector("#about");
let newpriceInput = document.querySelector(".pricenew");
let oldpriceInput = document.querySelector(".priceold");
let photoInput = document.querySelector(".photo");
let addProduct = document.querySelector(".add-product");
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
    <tr>
    <td>${el.id}</td>
    <td><img width="60px" src="${el.photo}" alt="" /></td>
    <td>${el.title}</td>
    <td>${el.about}</td>
    <td>${el.priceold}$</td>
    <td>${el.pricenew}$</td>
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
getAllProducts();

searchInput.addEventListener("input", function (e) {
  filteredArr = copyArr;
  filteredArr = filteredArr.filter((el) =>
    `${el.title} ${el.about}`
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase())
  );
  getAllProducts();
});

sortBtn.addEventListener("click", function () {
  if (sorted === "asc") {
    filteredArr.sort((a, b) => a.pricenew - b.pricenew);
    sorted = "dsc";
    sortBtn.innerHTML = "SORT Low to High";
  } else if (sorted === "dsc") {
    filteredArr.sort((a, b) => b.pricenew - a.pricenew);
    sorted = "def";
    sortBtn.innerHTML = "SORT High to Low";
  } else {
    filteredArr = copyArr;
    sorted = "asc";
    sortBtn.innerHTML = "SORT";
  }
  getAllProducts();
});
function deleteBtn(id) {
  axios.delete(`${BASE_URL}/${id}`);
}
let editStatus = false;
let editId;
addProduct.addEventListener("click", function () {
  if (!editStatus) {
    axios.post(`${BASE_URL}`, {
      photo: `./assets/image/${photoInput.value.split("\\")[2]}`,
      title: titleInput.value,
      about: aboutInput.value,
      priceold: oldpriceInput.value,
      pricenew: newpriceInput.value,
    });
  } else {
    axios.patch(`${BASE_URL}/${editId}`, {
      photo: `./assets/image/${photoInput.value.split("\\")[2]}`,
      title: titleInput.value,
      about: aboutInput.value,
      priceold: oldpriceInput.value,
      pricenew: newpriceInput.value,
    });
    editStatus = false;
  }
});

function editUser(id) {
  editStatus = true;
  editId = id;
  copyArr.filter((elem) => elem.id == id);
  axios(`${BASE_URL}/${id}`).then((res) => {
    titleInput.value = res.data.title;
    aboutInput.value = res.data.about;
    newpriceInput.value = res.data.pricenew;
    oldpriceInput.value = res.data.priceold;
  });
  document.querySelector(".title").innerHTML = "Edit Product";
  addProduct.innerHTML = "EDIT PRODUCT";
}
