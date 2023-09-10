const productsList = new ProductsList();

const categoriesList = new Categories();
categoriesList.render();

const productInfo = new ProductInfo();

const buyBtn = new BuyBtn();

categoriesContainer.addEventListener('click', (e) => {
    if (document.querySelector('.chosen-category')) {
        document.querySelector('.chosen-category').classList.remove('chosen-category');
    }

    const button = e.target;
    button.classList.add('chosen-category');

    const chosenCategory = button.dataset.name;

    productsList.render(chosenCategory);
})


productsContainer.addEventListener('click', function(e) {
    const idOfChoosenProduct = e.target.closest('[data-id]').dataset.id;
    productInfo.render(idOfChoosenProduct);
    buyBtn.render();

    const productInfoBtn = document.querySelector(`.${buyBtn.getClassName()}`);

    productInfoBtn.addEventListener('click', () => {
        buyBtn.buy(idOfChoosenProduct);
        window.location.href = 'http://127.0.0.1:5500/homeworks/dz28';
    })
})