const sliderImagesContainer = document.querySelector('.slider__images');

function renderImages() {
    let i = 1;
    renderImages = function() {
        for (i; i <= 6; i++) {
            sliderImagesContainer.innerHTML += `<img class="slider__image" src="images/${i}.jpg"/>`;
        }
    }
    renderImages();
    return renderImages;   
}

renderImages();