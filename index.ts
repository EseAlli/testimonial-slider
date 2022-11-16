const prev = <HTMLElement>document.querySelector(".prev");
const next = <HTMLElement>document.querySelector(".next");

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n: number) {
  showSlides((slideIndex += n));
}

function showSlides(n: number) {
  let i;
  let slides = document.getElementsByClassName("testimony");
  let dots = document.getElementsByClassName("dot");
  n > slides.length
    ? (slideIndex = 1)
    : n < 1
    ? (slideIndex = slides.length)
    : null;
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    let slide = <HTMLElement>slides[i];
    slide.style.display = "none";
  }

  let slideToDisplay = <HTMLElement>slides[slideIndex - 1];
  slideToDisplay.style.display = "grid";
}

prev.addEventListener("click", () => {
  console.log("CLICKED");
  plusSlides(-1);
});
