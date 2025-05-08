
document.addEventListener("DOMContentLoaded", () => {
    const headingText = "WELCOME TO PROBFIX GROUP";
    const subheadingText = "We are dedicated to turning your aspirations into reality, whether you're searching for your ideal property or in need of trusted financial solutions";
  
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
  

  let currentIntroSlide = 0;
  const introSlides = document.querySelectorAll(".intro-slide");

  function showIntroSlide(index) {
    introSlides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  }

  function changeIntroSlide(step) {
    currentIntroSlide += step;
    if (currentIntroSlide >= introSlides.length) currentIntroSlide = 0;
    if (currentIntroSlide < 0) currentIntroSlide = introSlides.length - 1;
    showIntroSlide(currentIntroSlide);
  }

  // Auto-play every 5 seconds
  setInterval(() => {
    changeIntroSlide(1);
  }, 5000);



  // Initialize EmailJS with your user ID
  emailjs.init("7m6PT7D2OUQlXNcOZ");

  // Handle the form submission
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get form data
    const formData = new FormData(form);
    const formObj = {};
    formData.forEach((value, key) => {
      formObj[key] = value;
    });

    // Send the email using EmailJS
    emailjs.send("service_zjtqfxi", "template_9svwc4c", formObj)
      .then(function (response) {
        alert("Message sent successfully!");
        form.reset(); // Reset the form after sending
      }, function (error) {
        alert("Failed to send message. Please try again.");
      });
  });