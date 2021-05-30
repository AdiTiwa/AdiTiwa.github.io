var slides = document.getElementsByClassName("slide");
var currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.toggle("show");
    currentSlide += 1;
    if (currentSlide > slides.length - 1) {
        currentSlide = 0;
    }
    slides[currentSlide].classList.toggle('show');
}

function previousSlide() {
    slides[currentSlide].classList.toggle("show");
    currentSlide -= 1;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    slides[currentSlide].classList.toggle("show");
}