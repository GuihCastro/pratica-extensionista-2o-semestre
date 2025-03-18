let slideIndex = 0;

function mostrarSlide(index) {
    const slides = document.querySelectorAll('.carrossel-item');
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;
    const offset = -slideIndex * 100;
    document.querySelector('.carrossel-container').style.transform = `translateX(${offset}%)`;
}

function mudarSlide(n) {
    slideIndex += n;
    mostrarSlide(slideIndex);
}

mostrarSlide(slideIndex);
