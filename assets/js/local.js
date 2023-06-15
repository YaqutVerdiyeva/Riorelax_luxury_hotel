let favrooms = JSON.parse(localStorage.getItem("favroom"));
let product = JSON.parse(localStorage.getItem("product"));
let arrayFromStroage1 = JSON.parse(localStorage.getItem("favroom"));
let arrayLength1 = arrayFromStroage1.length || 0;
wishlistCount.innerHTML = arrayLength1;
let arrayFromStroage2 = JSON.parse(localStorage.getItem("product"));
let arrayLength2 = arrayFromStroage2.length || 0; 
basketCount.innerHTML = arrayLength2;