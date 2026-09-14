document.addEventListener("DOMContentLoaded", () => {
  const categoryData = {
    portraits: {
      title: "Portraits",
      description: "Relaxed portraits that feel like you, not a performance.",
      images: [
        { src: "images/portraits/aidan.jpg"}, 
        { src: "images/portraits/anna.jpeg"}, 
        { src: "images/portraits/arsema.jpg"}, 
        { src: "images/portraits/cayla.jpeg"}, 
        { src: "images/portraits/chayla.jpeg"}, 
        { src: "images/portraits/felix.jpeg"}, 
        { src: "images/portraits/kage.jpeg"}, 
        { src: "images/portraits/karla.jpeg"}, 
        { src: "images/portraits/leilani.jpeg"}, 
        { src: "images/portraits/mori.jpeg"}, 
        { src: "images/portraits/sophia.jpeg"}, 
        { src: "images/portraits/syvlia.jpeg"}, 
        { src: "images/portraits/sylvia2.jpeg"}]
    },
    projects: {
      title: "Projects",
      description: "A bright, personal collection for the start of something new.",
      images: [{ src: "images/Kage.jpeg"}]
    },
    concerts: {
      title: "Concerts",
      description: "The energy, color, and split seconds that make a live show unforgettable.",
      images: [{ src: "images/House.jpeg"}]
    },
    weddings: {
      title: "Weddings",
      description: "Honest images of the day, from the big promises to the quiet glances.",
      images: [{ src: "images/Anna.jpg"}]
    },
    landscapes: {
      title: "Landscapes",
      description: "Clean, confident portraits for wherever your work takes you.",
      images: [{ src: "images/House.jpeg"}]
    }
  };

  const categoryGallery = document.getElementById("category-gallery");
  if (categoryGallery) {
    const type = new URLSearchParams(window.location.search).get("type");
    const category = categoryData[type] || categoryData.portraits;
    document.title = `${category.title} | Maddi Green Photography`;
    document.getElementById("category-title").textContent = category.title;
    document.getElementById("category-description").textContent = category.description;
    categoryGallery.innerHTML = category.images.map(image => `
      <div class="gallery-item">
        <img src="${src}">
      </div>
    `).join("");
  }

  // --- Lightbox ---
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

  // --- Hamburger menu ---
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });

    // Close menu when a nav link is clicked
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('show');
      });
    });
  }
});
