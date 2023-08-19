const out = document.querySelector('.out');

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

out.innerHTML = `<img src="images/${getRandomNumber(1, 5)}.jpg" class="image" />`;