document.getElementById("right-arrow").onclick = (e) => {
    e.preventDefault(); //prevents doing to links destination
    const currentSlide = getCurrentSlide();
    let nextSlide = currentSlide.nextElementSibling;

    if(nextSlide === null) {
        nextSlide = document.querySelector("#slides :first-child");
    }

    switchSlides(currentSlide, nextSlide);
}

document.getElementById("left-arrow").onclick = (e) => {
    e.preventDefault(); //prevents doing to links destination
    const currentSlide = getCurrentSlide();
    let prevSlide = currentSlide.previousElementSibling;

    if(prevSlide == null) {
        prevSlide = document.querySelector("#slides :last-child");
    }

    switchSlides(currentSlide, prevSlide);
}

const getCurrentSlide = () => {
    return document.querySelector("#slides :not(.hidden)");
}

const switchSlides = (currentSlide, nextSlide) => {
    currentSlide.classList.add("hidden");
    nextSlide.classList.remove("hidden");
}