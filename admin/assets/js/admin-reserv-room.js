let BASE_URL = `http://localhost:3000/reservRoom`;
let reservations = document.querySelector("tbody");
let searchInput = document.querySelector(".search");
let select = document.querySelector("#select");
let checkIn = document.querySelector("#checkin");
let checkout = document.querySelector("#checkout");
let adults = document.querySelector("#adults");
let room = document.querySelector("#room");
let bookBtn = document.querySelector(".book-button");
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
    <div class="alert alert${el.id} mt-3" role="alert">
    <h4>Are you sure?</h4>
    <div>
    <button onclick=deleteUser(${el.id})>Yes</button>
    <button onclick=keepUser(${el.id})>No</button>
    </div>
   </div>
      <tr>
                    <td style="background-color: transparent;">${el.id}</td>
                    <td style="background-color: transparent;">${el.checkin}</td>
                    <td style="background-color: transparent;">${el.checkout}</td>
                    <td style="background-color: transparent;">${el.adults}</td>
                    <td style="background-color: transparent;">${el.room}</td>
                    <td style="background-color: transparent;">
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
    `${el.checkin} ${el.checkout}`
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase())
  );
  getAllReservations();
});

select.addEventListener("change", function (e) {
  filteredArr = copyArr;
  filteredArr = filteredArr.filter((el) =>
    el.room.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );
  getAllReservations();
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
bookBtn.addEventListener("click", function () {
  if (!editStatus) {
    if (checkIn.value && checkout.value && adults.value && room.value) {
      axios.post(`${BASE_URL}`, {
        checkin: checkIn.value,
        checkout: checkout.value,
        adults: adults.value,
        room: room.value,
      });
    }
  } else {
    axios.patch(`${BASE_URL}/${editId}`, {
      checkin: checkIn.value,
      checkout: checkout.value,
      adults: adults.value,
      room: room.value,
    });
    editStatus = false;
  }
});

function editUser(id) {
  editStatus = true;
  editId = id;
  copyArr.filter((elem) => elem.id == id);
  axios(`${BASE_URL}/${id}`).then((res) => {
    checkIn.value = res.data.checkin;
    checkout.value = res.data.checkout;
    adults.value = res.data.adults;
    room.value = res.data.room;
  });
  document.querySelector(".title").innerHTML = "Edit Reservations";
  bookBtn.innerHTML = "EDIT RESERVATIONS";
}
function darkLightMode() {
  let body = document.body;
  body.classList.toggle("dark-mode");
}
