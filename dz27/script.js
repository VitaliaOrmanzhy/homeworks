const container = document.querySelector('.container');

function addVariant() {
    let count = 1;

    addVariant = function() {
        const newVariant = document.createElement('button');

        newVariant.classList.add('variant');
        newVariant.innerHTML = `
            <img src="img/${count}.png" alt="" class="variant__img">
            <p class="variant__count">0</p>
        `

        container.append(newVariant);
        count++;
    }

    addVariant();

    return addVariant;
}


container.addEventListener('click', function(e) {
    const elem = e.target;

    const variantCount = elem.querySelector('.variant__count') || elem.parentElement.querySelector('.variant__count');
    variantCount.textContent++;
})


addVariant();
addVariant();
addVariant();
addVariant();
addVariant();
