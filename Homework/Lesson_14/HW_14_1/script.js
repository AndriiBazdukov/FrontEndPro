const slider = document.querySelector("#my-slider");
const slidesContainer = slider.querySelector("[data-slider-slides]");
const slides = Array.from(slidesContainer.children);

const prevBtn = slider.querySelector("[data-slider-prev]");
const nextBtn = slider.querySelector("[data-slider-next]");

const dotsContainer = slider.querySelector("[data-slider-dots]");
const dots = Array.from(dotsContainer.children);

let currentIndex = 0;

function showSlide(index) {
  slides.forEach(s => s.classList.remove("is-active"));
  dots.forEach(d => d.classList.remove("is-active"));

  slides[index].classList.add("is-active");
  dots[index].classList.add("is-active");

  currentIndex = index;

  updateButtons();
}

function updateButtons() {
  prevBtn.style.display = currentIndex === 0 ? "none" : "block";
  nextBtn.style.display = currentIndex === slides.length - 1 ? "none" : "block";
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    showSlide(currentIndex - 1);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    showSlide(currentIndex + 1);
  }
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

showSlide(0);