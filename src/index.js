
let slideIndex = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll('.slider-card');
  const totalSlides = slides.length;

  slideIndex += step;
  
  if (slideIndex < 0) {
    slideIndex = totalSlides - 3; // If it's less than 0, show the last 3 images
  } else if (slideIndex > totalSlides - 3) {
    slideIndex = 0; // If it's greater than the total number of images, go back to the start
  }

  // Move the slider track by adjusting its transform property
  const track = document.querySelector('.slider-track');
  track.style.transform = `translateX(-${slideIndex * 33.33}%)`;
}
