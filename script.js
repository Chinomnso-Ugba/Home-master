// ---- mobile nav ----

const navToggle = document.getElementById("navToggle");
const navOverlay = document.getElementById("navOverlay");

function closeNav() {
  document.body.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
}

function toggleNav() {
  const isOpen = document.body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
}

navToggle.addEventListener("click", toggleNav);
navOverlay.addEventListener("click", closeNav);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeNav();
});

// ---- hero slider ----

const slides = [
  {
    mobile: "./images/mobile-image-hero-1.jpg",
    desktop: "./images/desktop-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    mobile: "./images/mobile-image-hero-2.jpg",
    desktop: "./images/desktop-image-hero-2.jpg",
    title: "We are available all across the globe",
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    mobile: "./images/mobile-image-hero-3.jpg",
    desktop: "./images/desktop-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

let current = 0;

const heroImageMobile = document.getElementById("heroImageMobile");
const heroImageDesktop = document.getElementById("heroImageDesktop");
const heroTitle = document.getElementById("heroTitle");
const heroText = document.getElementById("heroText");

function showSlide(index) {
  // wrap around in both directions
  current = (index + slides.length) % slides.length;
  const slide = slides[current];

  heroImageMobile.src = slide.mobile;
  heroImageDesktop.src = slide.desktop;
  heroTitle.textContent = slide.title;
  heroText.textContent = slide.text;
}

document.getElementById("prevSlide").addEventListener("click", () => showSlide(current - 1));
document.getElementById("nextSlide").addEventListener("click", () => showSlide(current + 1));
