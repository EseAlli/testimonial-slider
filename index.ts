const prev = <HTMLElement>document.querySelector(".prev");
const next = <HTMLElement>document.querySelector(".next");

let slideIndex = 1;

function plusSlides(n: number): void {
  showSlides((slideIndex += n));
}

function showSlides(n: number) {
  let i;
  let slides = document.getElementsByClassName("testimony");
  console.log(slides);
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
  plusSlides(-1);
});

next?.addEventListener("click", function () {
  plusSlides(1);
});

document.onkeydown = function (e) {
  console.log(e.code);
  switch (e.code) {
    case "37":
      //left
      e.preventDefault();
      slideIndex--;
      showSlides(slideIndex);
      break;
    case "39":
      //right
      e.preventDefault();
      slideIndex++;
      showSlides(slideIndex);
      break;
  }
};
