let sliderImages = document.getElementsByClassName("Nature");
let topImageIndex = 0;

setInterval(function () {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.zIndex = 0;
  }
  sliderImages[topImageIndex].style.zIndex = 10;
  topImageIndex++;
  if (topImageIndex >= sliderImages.length) {
    topImageIndex = 0;
  }
}, 3000);
