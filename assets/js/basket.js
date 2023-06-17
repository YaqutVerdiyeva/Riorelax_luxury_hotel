let products = JSON.parse(localStorage.getItem("product"));
let productList = document.querySelector(".product-section");
let searchInput = document.querySelector(".search");
let copyData = [];
let filteredArr = [];

function getProductList() {
  copyData = [...products];
  productList.innerHTML = "";
  filteredArr =
    filteredArr.length || searchInput.value ? filteredArr : products;
  filteredArr.forEach((el) => {
    productList.innerHTML += `
    <div class="col-lg-4 col-md-6 products mt-3">
    <div class="product">
      <img width="100%" src="${el.photo}" alt="" />
      <div class="product-text">
        <span>${el.title}</span>
        <h4>${el.about}</h4>
        <div class="price">
         <div>
         <span class="new-price">$${el.pricenew}.00</span>
         <span class="back-price">$${el.priceold}.00</span></div>
          <button onclick="deleteBasket(${el.id})" class="basket mt-3">Delete</button>
        </div>
      </div>
    </div>
  </div>
        `;
  });
}

getProductList();
searchInput.addEventListener("input", function (e) {
  filteredArr = copyData;
  filteredArr = filteredArr.filter((el) =>
    `${el.title} ${el.about}`
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase())
  );
  getProductList();
});

function deleteBasket(id) {
  products = copyData.filter((el) => el.id != id);
  filteredArr = products;
  localStorage.setItem("product", JSON.stringify(products));
  getProductList();
}
