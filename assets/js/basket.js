let products = JSON.parse(localStorage.getItem("product"));
let productList = document.querySelector(".product-section");
let searchInput = document.querySelector(".search");
let sortBtn = document.querySelector(".sort");
let sorted = "asc";

function getProductList() {
  productList.innerHTML = "";
  products.forEach((el) => {
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
  products = products.filter((el) =>
    `${el.title} ${el.about}`
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase())
  );
  getProductList();
});

sortBtn.addEventListener("click", function () {
  if (sorted === "asc") {
    let product = products.sort((a, b) => a.pricenew - b.pricenew);
    sorted = "dsc";
    sortBtn.innerHTML = "SORT Low to High";
    getProductList(product);
  } else if (sorted === "dsc") {
    let product = products.sort((a, b) => b.pricenew - a.pricenew);
    sorted = "def";
    sortBtn.innerHTML = "SORT High to Low";
    getProductList(product);
  } else {
    let product = products;
    sorted = "asc";
    sortBtn.innerHTML = "SORT";
    getProductList(product);
  }
});
function deleteBasket(id) {
  products = products.filter((el) => el.id != id);
  localStorage.setItem("product", JSON.stringify(products));
  getProductList();
}
