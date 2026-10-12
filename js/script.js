document.addEventListener("DOMContentLoaded", () => {
  const categoryData = {
    portraits: {
      title: "Portraits",
      description: "Relaxed portraits that feel like you, not a performance.",
      images: [
        { src: "images/portraits/aidan.jpg" },
        { src: "images/portraits/sylvia2.jpg" },
        { src: "images/portraits/arsema.jpg" },
        { src: "images/portraits/kage.jpg" },
        { src: "images/portraits/mori.jpg" },
        { src: "images/portraits/anna.jpg" },
        { src: "images/portraits/karla.jpg" },
        { src: "images/portraits/leilani.jpg" },
        { src: "images/portraits/chayla.jpg" },
        { src: "images/portraits/felix.jpg" },
        { src: "images/portraits/cayla.jpg" },
        { src: "images/portraits/sophia.JPG" },
        { src: "images/portraits/sylvia.jpg" }
      ]
    },
    projects: {
      title: "Projects",
      description: "A bright, personal collection for the start of something new.",
      projectList: [
        {
          title: "Winter 2026 Midterm",
          statement:"",
          images: [
            { src: "images/projects/wMidterm1.jpg" },
            { src: "images/projects/wMidterm2.jpg" },
            { src: "images/projects/wMidterm3.jpg" },
            { src: "images/projects/wMidterm4.jpg" }
          ]
        },
        {
          title: "Winter 2026 Final",
          statement: "Add your artist statement for Winter 2026 Final here.",
          images: [
            { src: "images/projects/wFinal1.jpg" },
            { src: "images/projects/wFinal2.jpg" },
            { src: "images/projects/wFinal3.jpg" },
            { src: "images/projects/wFinal4.jpg" },
            { src: "images/projects/wFinal5.jpg" },
            { src: "images/projects/wFinal6.jpg" },
            { src: "images/projects/wFinal7.jpg" },
            { src: "images/projects/wFinal8.jpg" },
            { src: "images/projects/wFinal9.jpg" }
          ]
        },
        {
          title: "Spring 2026 Midterm",
          statement: "",
          images: [
            { src: "images/projects/sMidterm1.jpg" },
            { src: "images/projects/sMidterm2.jpg" },
            { src: "images/projects/sMidterm6.jpg" }
          ]
        },
        {
          title: "Spring 2026 Final",
          statement: "Add your artist statement for Spring 2026 Final here.",
          images: [
            { src: "images/projects/sFinal1.jpg" },
            { src: "images/projects/sFinal2.jpg" },
            { src: "images/projects/sFinal3.jpg" }
          ]
        }
      ]
    },
    concerts: {
      title: "Concerts",
      description: "The energy, color, and split seconds that make a live show unforgettable.",
      images: [
        { src: "images/concerts/bassist.jpg" },
        { src: "images/concerts/drummer.jpg" },
        { src: "images/concerts/ghost.JPG" },
        { src: "images/concerts/kazoo.jpg" },
        { src: "images/concerts/microphone.jpg" },
        { src: "images/concerts/singer.jpg" },
        { src: "images/concerts/teacher.jpg" }
      ]
    },
    weddings: {
      title: "Weddings",
      description: "Honest images of the day, from the big promises to the quiet glances.",
      images: [{ src: "images/Anna.jpg" }]
    },
    landscapes: {
      title: "Landscapes",
      description: "Clean, confident portraits for wherever your work takes you.",
      images: [{ src: "images/House.jpeg" }]
    }
  };

  // --- Read the category from the URL (e.g., category.html?type=portraits) ---
  const params = new URLSearchParams(window.location.search);
  const categoryType = params.get("type");
  const currentCategory = categoryData[categoryType];

  const titleEl = document.getElementById("category-title");
  const descEl = document.getElementById("category-description");
  const galleryContainer = document.getElementById("category-gallery");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  // Helper function to create a photo item with lightbox click
  function createGalleryItem(imageObj, altText) {
    const src = typeof imageObj === "string" ? imageObj : imageObj.src;

    const item = document.createElement("div");
    item.className = "gallery-item";

    const img = document.createElement("img");
    img.src = src;
    img.alt = imageObj.alt || altText || "";

    img.addEventListener("click", () => {
      if (lightbox && lightboxImg) {
        lightboxImg.src = src;
        lightbox.style.display = "flex";
      }
    });

    item.appendChild(img);
    return item;
  }

  // --- Populate Category Page ---
  if (galleryContainer && currentCategory) {
    if (titleEl) titleEl.textContent = currentCategory.title;
    if (descEl) descEl.textContent = currentCategory.description;

    // Case A: Category has multiple projects (Title + Artist Statement + Photos)
    if (currentCategory.projectList) {
      galleryContainer.classList.remove("gallery");
      galleryContainer.classList.add("projects-container");

      currentCategory.projectList.forEach((project) => {
        const projectSection = document.createElement("article");
        projectSection.className = "project-block";

        const header = document.createElement("div");
        header.className = "project-header";

        const title = document.createElement("h3");
        title.className = "project-title";
        title.textContent = project.title;
        header.appendChild(title);

        if (project.statement) {
          const statement = document.createElement("p");
          statement.className = "project-statement";
          statement.textContent = project.statement;
          header.appendChild(statement);
        }

        const projectGrid = document.createElement("div");
        projectGrid.className = "gallery category-gallery";

        project.images.forEach((imgObj) => {
          projectGrid.appendChild(createGalleryItem(imgObj, project.title));
        });

        projectSection.appendChild(header);
        projectSection.appendChild(projectGrid);
        galleryContainer.appendChild(projectSection);
      });

    // Case B: Standard category (Portraits, Concerts, etc.)
    } else if (currentCategory.images) {
      currentCategory.images.forEach((imgObj) => {
        galleryContainer.appendChild(createGalleryItem(imgObj, currentCategory.title));
      });
    }
  }

  // --- Close Lightbox on click ---
  if (lightbox) {
    lightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  }

  // --- Hamburger menu ---
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });

    document.querySelectorAll("nav a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("show");
      });
    });
  }
});