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

let px = 0;
const nextBtn = document.querySelector('.slider__next');
const prevBtn = document.querySelector('.slider__prev');

function nextFunc() {
    //prevBtn з'являється
    prevBtn.style.display = 'block';

    //к-сть картинок
    const imagesLength = document.querySelectorAll('.slider__image').length;

    if (px != (imagesLength - 1) * 800 - 800) {
        sliderImagesContainer.style.right = `${px + 800}px`;
        px += 800;
    }
    
    if (px == (imagesLength - 1) * 800 - 800) {
        nextBtn.style.display = 'none';
    }
    // if (px == ((document.querySelectorAll('.slider__image').length - 1) * 800) - 800)
        
}

function prevFunc() {
    //nextBtn з'являєьться
    nextBtn.style.display = 'block';

    //к-сть картинок
    const imagesLength = document.querySelectorAll('.slider__image').length;

    if (px != 0) {
        sliderImagesContainer.style.right = `${px - 800}px`;
        px -= 800;
    }
    
    if (px == 0) {
        prevBtn.style.display = 'none';
    }
}

nextBtn.addEventListener('click', nextFunc);
prevBtn.addEventListener('click', prevFunc);
