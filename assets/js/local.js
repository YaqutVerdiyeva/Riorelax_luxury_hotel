let favrooms = JSON.parse(localStorage.getItem("favroom"));
let product = JSON.parse(localStorage.getItem("product"));
let arrayFromStroage1 = JSON.parse(localStorage.getItem("favroom"));
let arrayFromStroage2 = JSON.parse(localStorage.getItem("product"));
let arrayLength1 = arrayFromStroage1.length || 0;
let arrayLength2 = arrayFromStroage2.length || 0; 

wishlistCount.innerHTML = arrayLength1;
basketCount.innerHTML = arrayLength2;