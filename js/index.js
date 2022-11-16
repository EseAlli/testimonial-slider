"use strict";
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides((slideIndex += n));
}
function showSlides(n) {
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
        let slide = slides[i];
        slide.style.display = "none";
    }
    let slideToDisplay = slides[slideIndex - 1];
    slideToDisplay.style.display = "grid";
}
prev.addEventListener("click", () => {
    console.log("CLICKED");
    plusSlides(-1);
});
