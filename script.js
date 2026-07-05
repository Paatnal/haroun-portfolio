document.addEventListener("DOMContentLoaded", function () {

  // Smooth scroll for nav links
  const links = document.querySelectorAll("nav ul li a");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: "smooth"
      });
    });
  });

  // Simple animation on scroll (fade in effect)
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY + 400;

    sections.forEach(section => {
      if (scrollPos > section.offsetTop) {
        section.style.opacity = 1;
        section.style.transform = "translateY(0)";
        section.style.transition = "0.6s ease-in-out";
      } else {
        section.style.opacity = 0;
        section.style.transform = "translateY(50px)";
      }
    });
  });

  // Contact form fake submit
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent successfully! I will get back to you soon.");
    form.reset();
  });

  // Typing effect for hero text
  const heroText = document.querySelector(".hero h3");

  const textArray = [
    "Frontend Web Developer",
    "HTML • CSS • JavaScript Expert",
    "Freelance Web Designer"
  ];

  let i = 0;
  let j = 0;
  let currentText = "";
  let isDeleting = false;

  function typeEffect() {
    currentText = textArray[i];

    if (!isDeleting) {
      heroText.textContent = currentText.substring(0, j++);
      if (j > currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
      }
    } else {
      heroText.textContent = currentText.substring(0, j--);
      if (j < 0) {
        isDeleting = false;
        i = (i + 1) % textArray.length;
      }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }

  typeEffect();

});