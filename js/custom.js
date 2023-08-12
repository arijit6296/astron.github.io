document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#image-carousel', {
    heightRatio: 0.5,
  } ).mount();
} );

$(document).ready(function () {
var swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 1000,
  },
  effect: 'fade',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
      el: ".swiper-pagination",
    },
});
});

let valueDisplays = document.querySelectorAll(".num");
let interval = 1500;
valueDisplays.forEach((valueDisplay) => {
let startValue = 0;
let endValue = parseInt(valueDisplay.getAttribute
("data-val"));
let duration = Math.floor(interval / endValue);
let counter = setInterval(function () {
startValue += 1;
valueDisplay.textContent = startValue;
if (startValue == endValue) {
clearInterval (counter);
}
}, duration);
});