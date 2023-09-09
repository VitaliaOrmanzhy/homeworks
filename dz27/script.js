const btnContainer = document.querySelector('.btn-container');

function addVariant() {
    let count = 1;

    addVariant = function() {
        const newVariant = document.createElement('button');

        newVariant.classList.add('variant');
        newVariant.innerHTML = `
            <img src="img/${count}.png" alt="" class="variant__img">
            <p class="variant__count">0</p>
        `

        btnContainer.append(newVariant);
        count++;
    }

    addVariant();

    return addVariant;
}


btnContainer.addEventListener('click', function(e) {
    const elem = e.target;

    console.log(elem.parentElement.querySelector('.variant__count'));
    console.log(elem.querySelector('.variant__count'));

    const variantCount = elem.parentElement.querySelector('.variant__count');
    variantCount.textContent++;
})


addVariant();
addVariant();
addVariant();
addVariant();
addVariant();
