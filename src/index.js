
let currentIndex = 0;

function moveSlide(direction) {
  const track = document.querySelector('.slider-track');
  const cards = document.querySelectorAll('.slider-card');
  const cardWidth = cards[0].offsetWidth;
  const visibleCards = window.innerWidth <= 768 ? 1 : 3;
  const maxIndex = cards.length - visibleCards;

  currentIndex += direction;

  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

window.addEventListener('resize', () => {
  moveSlide(0); // Realign on resize
});




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
  