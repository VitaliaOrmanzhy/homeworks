const sliderImagesContainer = document.querySelector('.slider__images');

function addImages() {
    for (let i = 1; i <= 6; i++) {
        sliderImagesContainer.innerHTML += `<img src="images/${i}.jpg"/>`;
    }  
}

addImages()