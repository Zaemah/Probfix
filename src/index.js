
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



document.addEventListener("DOMContentLoaded", () => {
    const headingText = "WELCOME TO PROBFIX FINANCIAL SERVICES";
    const subheadingText = "We are here to fix all your financial problems without hesitation and delays.";
  
    const headingElement = document.getElementById("welcome-heading");
    const subheadingElement = document.getElementById("welcome-subheading");
  
    let headingIndex = 0;
    let subheadingIndex = 0;
  
    function typeHeading() {
      if (headingIndex < headingText.length) {
        headingElement.textContent += headingText.charAt(headingIndex);
        headingIndex++;
        setTimeout(typeHeading, 80);
      } else {
        setTimeout(typeSubheading, 300); // short pause before subheading
      }
    }
  
    function typeSubheading() {
      if (subheadingIndex < subheadingText.length) {
        subheadingElement.textContent += subheadingText.charAt(subheadingIndex);
        subheadingIndex++;
        setTimeout(typeSubheading, 40);
      }
    }
  
    typeHeading();
  });
  