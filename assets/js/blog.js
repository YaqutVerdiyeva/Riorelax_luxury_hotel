let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

//Modal video
btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
  let video4 = document.getElementById("videoId4");
  video4.contentWindow.postMessage(
    '{"event":"command", "func":"stopVideo", "args":""}',
    "*"
  );
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
