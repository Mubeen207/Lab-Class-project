// let sliderImages = document.getElementsByClassName("Nature");
// let topImageIndex = 0;

// setInterval(function () {
//   for (let i = 0; i < sliderImages.length; i++) {
//     sliderImages[i].style.zIndex = 0;
//   }
//   sliderImages[topImageIndex].style.zIndex = 10;
//   topImageIndex++;
//   if (topImageIndex >= sliderImages.length) {
//     topImageIndex = 0;
//   }
// }, 3000);
// function swapRight() {
//   for (let i = 0; i < sliderImages.length; i++) {
//     sliderImages[i].style.zIndex = 0;
//   }
//   sliderImages[topImageIndex].style.zIndex = 10;
//   topImageIndex++;
//   if (topImageIndex >= sliderImages.length) {
//     topImageIndex = 0;
//   }
// }
// function swapLeft() {
//   for (let i = 0; i < sliderImages.length; i++) {
//     sliderImages[i].style.zIndex = 0;
//   }
//   topImageIndex--;
//   if (topImageIndex < 0) {
//     topImageIndex = sliderImages.length - 1;
//   }
//   sliderImages[topImageIndex].style.zIndex = 10;
// }
let sliderImages = document.getElementsByClassName("Nature");
let topImageIndex = 0;
let intervalTime = 3000;
let sliderInterval;

function resetImages() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.zIndex = 0;
    sliderImages[i].style.opacity = 0;
  }
}

function showImage(index) {
  resetImages();
  sliderImages[index].style.zIndex = 10;
  sliderImages[index].style.opacity = 1;
}

function nextImage() {
  topImageIndex++;
  if (topImageIndex >= sliderImages.length) {
    topImageIndex = 0;
  }
  showImage(topImageIndex);
}

function prevImage() {
  topImageIndex--;
  if (topImageIndex < 0) {
    topImageIndex = sliderImages.length - 1;
  }
  showImage(topImageIndex);
}

function startSlider() {
  showImage(topImageIndex);
  sliderInterval = setInterval(nextImage, intervalTime);
}

function stopSlider() {
  clearInterval(sliderInterval);
}

// Manual controls
function swapRight() {
  stopSlider();
  nextImage();
  startSlider();
}

function swapLeft() {
  stopSlider();
  prevImage();
  startSlider();
}

startSlider();
