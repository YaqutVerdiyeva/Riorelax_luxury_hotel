let favroom = JSON.parse(localStorage.getItem("favroom"));
let roomCard = document.querySelector(".rooms");
let searchInput = document.querySelector(".search");
let sortBtn = document.querySelector(".sort");
let sorted = "asc";
let filteredArr = [];
let copyData = [];
function favoritRoom() {
  copyData = [...favroom];
  roomCard.innerHTML = "";
  filteredArr = filteredArr.length || searchInput.value ? filteredArr : favroom;
  filteredArr.forEach((el) => {
    roomCard.innerHTML += `
      <div class="col-lg-4 col-md-6 room-card">
      <div class="room">
        <div class="card">
        <img src="${el.photo}" alt="" />
        <i onclick="deleteFavBtn(${el.id})" class="fa-regular fa-heart" style="color: #ffffff;"></i>
          <div class="card-content">
            <h2>${el.title}</h2>
            <p>${el.price}$</p>
          </div>
        </div>
      </div>
    </div>
        `;
  });
}
favoritRoom();
searchInput.addEventListener("input", function (e) {
  filteredArr = copyData;
  filteredArr = filteredArr.filter((el) =>
    el.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );
  favoritRoom();
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
    filteredArr = copyData;
    sorted = "asc";
    sortBtn.innerHTML = "SORT";
  }
  favoritRoom();
});
function deleteFavBtn(id) {
  favroom = copyData.filter((el) => el.id != id);
  filteredArr = favroom;
  localStorage.setItem("favroom", JSON.stringify(favroom));
  favoritRoom();
}
