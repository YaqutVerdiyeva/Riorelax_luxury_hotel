let BASE_URL = `http://localhost:3000/shop`;
let products = document.querySelector(".product-section");
let searchInput = document.querySelector(".search");
let sortBtn = document.querySelector(".sort");
let sorted = "asc";
let filteredArr = [];
let copyArr = [];

async function getAllProducts() {
  let res = await axios(BASE_URL);
  let data = res.data;
  console.log(data);
  copyArr = data;
  products.innerHTML = "";
  filteredArr = filteredArr.length || searchInput.value ? filteredArr : data;
  filteredArr.forEach((el) => {
    products.innerHTML += `
    <div class="col-lg-4 col-md-6 products mt-3">
            <div class="product">
              <img width="100%" src="${el.photo}" alt="" />
              <div class="product-text">
                <span>${el.title}</span>
                <h4>${el.about}</h4>
                <div class="price">
                  <span class="new-price">$${el.pricenew}.00</span>
                  <span class="back-price">$${el.priceold}.00</span>
                </div>
              </div>
            </div>
          </div>
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
