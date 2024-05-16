function aFastCarousel(carouselId, idx = 0) {
    let nextButton = document.querySelector(`.${carouselId}-but > #forward`);
    let prevButton = document.querySelector(`.${carouselId}-but > #backward`);
    let cSlides = document.querySelectorAll(`#${carouselId} > .slide`);
    
    if (idx >= cSlides.length) {
        idx = 0;
    }
    if (idx < 0) {
        idx = cSlides.length - 1;
    }
    
    cSlides.forEach(slide => slide.classList.add('hidden'));
    cSlides[idx].classList.remove('hidden');

    nextButton.addEventListener('click', (e) => {
        e.preventDefault();
        aFastCarousel(carouselId, idx + 1);
    });
    prevButton.addEventListener('click', (e) => {
        e.preventDefault();
        aFastCarousel(carouselId, idx - 1);
    });
}





let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}