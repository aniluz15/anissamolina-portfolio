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