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
    <td style="background-color: transparent;">${el.about}</td>
    <td style="background-color: transparent;">${el.priceold}$</td>
    <td style="background-color: transparent;">${el.pricenew}$</td>
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
addProduct.addEventListener("click", function () {
  if (!editStatus) {
    if (
      titleInput.value &&
      aboutInput.value &&
      oldpriceInput.value &&
      newpriceInput.value
    )
      axios.post(`${BASE_URL}`, {
        photo: base64,
        title: titleInput.value,
        about: aboutInput.value,
        priceold: oldpriceInput.value,
        pricenew: newpriceInput.value,
      });
  } else {
    axios.patch(`${BASE_URL}/${editId}`, {
      photo: base64,
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

let toggleBtn = document.querySelector(".toggle-btn-shop");
let theme = document.querySelector("body");
let darkMode = localStorage.getItem("dark-mode-shop");

let enableDarkMode = () => {
  theme.classList.add("dark-mode");
  toggleBtn.classList.remove("dark-mode");
  localStorage.setItem("dark-mode-shop", "enabled");
};

let disableDarkMode = () => {
  theme.classList.remove("dark-mode");
  toggleBtn.classList.add("dark-mode");
  localStorage.setItem("dark-mode-shop", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode(); 
}

toggleBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode-shop");
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});