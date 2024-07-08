const paginationSlider = document.querySelector(".pagination-slider .wrapper");
const prevBtn = document.querySelector(".pagination-action .preview");
const nextBtn = document.querySelector(".pagination-action .next");
nextBtn.addEventListener("click", () => {
  const contentWidth = paginationSlider.querySelector(
    ".slide-item .text-content"
  ).clientWidth;
  paginationSlider.scrollLeft += contentWidth;
});
prevBtn.addEventListener("click", () => {
  const contentWidth = paginationSlider.querySelector(
    ".slide-item .text-content"
  ).clientWidth;
  paginationSlider.scrollLeft -= contentWidth;
});
