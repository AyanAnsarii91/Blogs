// Grab your DOM elements
const burger  = document.querySelector(".burger");
const navList = document.querySelector(".nav-list");
const navbar  = document.querySelector(".navbar");

// Hamburger ⇆ Cross toggle
burger.addEventListener("click", () => {
  navList.classList.toggle("active");
  burger.classList.toggle("active");
});

// Close menu when a nav link is clicked
navList.querySelectorAll("li a").forEach(link => {
  link.addEventListener("click", () => {
    navList.classList.remove("active");
    burger.classList.remove("active");
  });
});

// Change navbar background on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
