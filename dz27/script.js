const container = document.querySelector('.container');

function addVariant() {
    let count = 1;

    addVariant = function() {
        const newVariant = document.createElement('div');

        newVariant.classList.add('variant');
        newVariant.innerHTML = `
        <label class="variant__label">
            <img src="img/${count}.png" alt="" class="variant__img">
            <input type="radio" name="radio" class="checkbox"/>
            <p class="variant__count">0</p>
        </label>`

        container.append(newVariant);
        count++;
    }

    addVariant();

    return addVariant;
}


function removeVote() {
    const votedElem = document.querySelector('.voted');

    if (votedElem) {
        votedElem.textContent--;
        votedElem.classList.remove('voted');
    }
}


container.addEventListener('change', function(e) {
    removeVote();
    const elem = e.target;

    const variantCount = elem.parentElement.querySelector('.variant__count');
    variantCount.classList.add('voted');
    variantCount.textContent++;
})


addVariant();
addVariant();
addVariant();
addVariant();
addVariant();
