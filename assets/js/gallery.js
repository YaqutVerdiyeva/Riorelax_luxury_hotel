let modal = document.getElementById("myModal");
let modal2 = document.getElementById("myModal2");
let modal1 = document.getElementById("myModal1");
let modal11 = document.getElementById("myModal11");
let modal3 = document.getElementById("myModal3");
let modal33 = document.getElementById("myModal33");
let modal4 = document.getElementById("myModal4");
let modal44 = document.getElementById("myModal44");
let modal5 = document.getElementById("myModal5");
let modal55 = document.getElementById("myModal55");
let modal6 = document.getElementById("myModal6");
let modal66 = document.getElementById("myModal66");
let modal7 = document.getElementById("myModal7");
let modal77 = document.getElementById("myModal77");
let modal8 = document.getElementById("myModal8");
let modal88 = document.getElementById("myModal88");
let modal9 = document.getElementById("myModal9");
let modal99 = document.getElementById("myModal99");
let modal10 = document.getElementById("myModal10");
let modal100 = document.getElementById("myModal100");
let btn = document.getElementById("myBtn");
let btn2 = document.getElementById("myBtn2");
let btn1 = document.getElementById("myBtn1");
let btn11 = document.getElementById("myBtn11");
let btn3 = document.getElementById("myBtn3");
let btn33 = document.getElementById("myBtn33");
let btn4 = document.getElementById("myBtn4");
let btn44 = document.getElementById("myBtn44");
let btn5 = document.getElementById("myBtn5");
let btn55 = document.getElementById("myBtn55");
let btn6 = document.getElementById("myBtn6");
let btn66 = document.getElementById("myBtn66");
let btn7 = document.getElementById("myBtn7");
let btn77 = document.getElementById("myBtn77");
let btn8 = document.getElementById("myBtn8");
let btn88 = document.getElementById("myBtn88");
let btn9 = document.getElementById("myBtn9");
let btn99 = document.getElementById("myBtn99");
let btn10 = document.getElementById("myBtn10");
let btn100 = document.getElementById("myBtn100");
let span = document.getElementsByClassName("close")[0];
let span2 = document.getElementsByClassName("close2")[0];
let span1 = document.getElementsByClassName("close1")[0];
let span11 = document.getElementsByClassName("close11")[0];
let span3 = document.getElementsByClassName("close3")[0];
let span33 = document.getElementsByClassName("close33")[0];
let span4 = document.getElementsByClassName("close4")[0];
let span44 = document.getElementsByClassName("close44")[0];
let span5 = document.getElementsByClassName("close5")[0];
let span55 = document.getElementsByClassName("close55")[0];
let span6 = document.getElementsByClassName("close6")[0];
let span66 = document.getElementsByClassName("close66")[0];
let span7 = document.getElementsByClassName("close7")[0];
let span77 = document.getElementsByClassName("close77")[0];
let span8 = document.getElementsByClassName("close8")[0];
let span88 = document.getElementsByClassName("close88")[0];
let span9 = document.getElementsByClassName("close9")[0];
let span99 = document.getElementsByClassName("close99")[0];
let span10 = document.getElementsByClassName("close10")[0];
let span100 = document.getElementsByClassName("close100")[0];
let menuicon = document.querySelector(".menuicon");
let menuicon1 = document.querySelector(".menuicon1");
let nav = document.querySelector(".nav-mobile");
let scrollUpBtn = document.querySelector(".scrollup");
//modal
btn.onclick = function () {
  modal.style.display = "block";
};
btn2.onclick = function () {
  modal2.style.display = "block";
};
btn1.onclick = function () {
  modal1.style.display = "block";
};
btn11.onclick = function () {
  modal11.style.display = "block";
};
btn3.onclick = function () {
  modal3.style.display = "block";
};
btn33.onclick = function () {
  modal33.style.display = "block";
};
btn4.onclick = function () {
  modal4.style.display = "block";
};
btn44.onclick = function () {
  modal44.style.display = "block";
};
btn5.onclick = function () {
  modal5.style.display = "block";
};
btn55.onclick = function () {
  modal55.style.display = "block";
};
btn6.onclick = function () {
  modal6.style.display = "block";
};
btn66.onclick = function () {
  modal66.style.display = "block";
};
btn7.onclick = function () {
  modal7.style.display = "block";
};
btn77.onclick = function () {
  modal77.style.display = "block";
};
btn8.onclick = function () {
  modal8.style.display = "block";
};
btn88.onclick = function () {
  modal88.style.display = "block";
};
btn9.onclick = function () {
  modal9.style.display = "block";
};
btn99.onclick = function () {
  modal99.style.display = "block";
};
btn10.onclick = function () {
  modal10.style.display = "block";
};
btn100.onclick = function () {
  modal100.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
span2.onclick = function () {
  modal2.style.display = "none";
};
span4.onclick = function () {
  modal4.style.display = "none";
};
span44.onclick = function () {
  modal44.style.display = "none";
};
span5.onclick = function () {
  modal5.style.display = "none";
};
span55.onclick = function () {
  modal55.style.display = "none";
};
span6.onclick = function () {
  modal6.style.display = "none";
};
span66.onclick = function () {
  modal6.style.display = "none";
};
span7.onclick = function () {
  modal7.style.display = "none";
};
span77.onclick = function () {
  modal77.style.display = "none";
};
span8.onclick = function () {
  modal8.style.display = "none";
};
span88.onclick = function () {
  modal88.style.display = "none";
};
span9.onclick = function () {
  modal9.style.display = "none";
};
span99.onclick = function () {
  modal99.style.display = "none";
};
span10.onclick = function () {
  modal10.style.display = "none";
};
span100.onclick = function () {
  modal100.style.display = "none";
};
span1.onclick = function () {
  modal1.style.display = "none";
};
span11.onclick = function () {
  modal11.style.display = "none";
};
span3.onclick = function () {
  modal3.style.display = "none";
};
span33.onclick = function () {
  modal33.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
//header scroll
function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.querySelector(".top-header").style.display = "none";
    document.querySelector(".bottom-header").style.background = "#977a5e";
    document.querySelector(".bottom-header").style.transition = "0.2s";
    scrollUpBtn.style.display = "block";
  } else {
    document.querySelector(".top-header").style.display = "block";
    document.querySelector(".bottom-header").style.background =
      " rgba(9, 9, 9, 0.5)";
    scrollUpBtn.style.display = "none";
  }
}
window.addEventListener("scroll", function () {
  scrollFunction();
});
//tabs
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

//menu
menuicon.addEventListener("click", function () {
  nav.classList.toggle("show");
  menuicon.style.display = "none";
  menuicon1.style.display = "block";
});
menuicon1.addEventListener("click", function () {
  nav.classList.toggle("show");
  menuicon.style.display = "block";
  menuicon1.style.display = "none";
});
document.querySelector(".plus1").addEventListener("click", function () {
  document.querySelector(".plus1").style.visibility = "hidden";
  document.querySelector(".minus1").style.visibility = "visible";
});
document.querySelector(".minus1").addEventListener("click", function () {
  document.querySelector(".plus1").style.visibility = "visible";
  document.querySelector(".minus1").style.visibility = "hidden";
});
document.querySelector(".plus2").addEventListener("click", function () {
  document.querySelector(".plus2").style.visibility = "hidden";
  document.querySelector(".minus2").style.visibility = "visible";
});
document.querySelector(".minus2").addEventListener("click", function () {
  document.querySelector(".plus2").style.visibility = "visible";
  document.querySelector(".minus2").style.visibility = "hidden";
});
document.querySelector(".plus3").addEventListener("click", function () {
  document.querySelector(".plus3").style.visibility = "hidden";
  document.querySelector(".minus3").style.visibility = "visible";
});
document.querySelector(".minus3").addEventListener("click", function () {
  document.querySelector(".plus3").style.visibility = "visible";
  document.querySelector(".minus3").style.visibility = "hidden";
});
document.querySelector(".plus4").addEventListener("click", function () {
  document.querySelector(".plus4").style.visibility = "hidden";
  document.querySelector(".minus4").style.visibility = "visible";
});
document.querySelector(".minus4").addEventListener("click", function () {
  document.querySelector(".plus4").style.visibility = "visible";
  document.querySelector(".minus4").style.visibility = "hidden";
});
//scrollUpBtn
scrollUpBtn.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
//side page
function openNav() {
  document.getElementById("mySidebar").style.width = "300px";
  document.getElementsByClassName("reservation-btn").style.marginLeft = "300px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementsByClassName("reservation-btn").style.marginLeft = "0";
}
