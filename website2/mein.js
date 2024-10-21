let days = document.getElementById("days");
let pickupDate = document.getElementById("pickup-date");
let under25 = document.getElementById("under25");
let toll = document.getElementById("toll");
let gps = document.getElementById("gps");
let roadside = document.getElementById("roadside");
let placeOrderButton = document.getElementById("placeOrderButton");
let total = document.getElementById("total");

let day = 0;
let options = 0;
let under = 0;
let cartotal = 0;

placeOrderButton.addEventListener("click", () => {
  cartotal = 29.99 * Number(days.value);

  if (toll.checked) {
    options = 3.95 * Number(days.value);
    console.log(options.toFixed(2));
  }
  if (gps.checked) {
    options = 2.95 * Number(days.value);
    console.log(options.toFixed(2));
  }
  if (roadside.checked) {
    options = 2.95 * Number(days.value);
    console.log(options.toFixed(2));
  }
 
  console.log(cartotal.toFixed(2));
  total.value = `total ${options + cartotal + under}`;
});
