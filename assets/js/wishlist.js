let favroom = JSON.parse(localStorage.getItem("favroom"));
let roomCard = document.querySelector(".rooms");
let searchInput = document.querySelector(".search");
let sortBtn = document.querySelector(".sort");
let sorted = "asc";

function favoritRoom() {
  roomCard.innerHTML = "";
  favroom.forEach((el) => {
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
  favroom = favroom.filter((el) =>
    el.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );
  favoritRoom();
});

sortBtn.addEventListener("click", function () {
  if (sorted === "asc") {
    let favRoom = favroom.sort((a, b) => a.price - b.price);
    sorted = "dsc";
    sortBtn.innerHTML = "SORT Low to High";
    favoritRoom(favRoom);
  } else if (sorted === "dsc") {
    let favRoom = favroom.sort((a, b) => b.price - a.price);
    sorted = "def";
    sortBtn.innerHTML = "SORT High to Low";
    favoritRoom(favRoom);
  } else {
    let favRoom = favroom;
    sorted = "asc";
    sortBtn.innerHTML = "SORT";
    favoritRoom(favRoom);
  }
});
function deleteFavBtn(id) {
  favroom = favroom.filter((el) => el.id != id);
  localStorage.setItem("favroom", JSON.stringify(favroom));
  favoritRoom();
}
