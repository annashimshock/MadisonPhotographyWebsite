const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach(image => {
  image.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = image.src;
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});