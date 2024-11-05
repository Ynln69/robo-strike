let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelector(".gallery-slides");
  const totalSlides = slides.children.length;
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  const offset = -currentIndex * 100; // Adjust to slide width
  slides.style.transform = `translateX(${offset}%)`;
}