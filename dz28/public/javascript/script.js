const productsList = new ProductsList(productsContainer);

const categoriesList = new Categories(categoriesContainer);
categoriesList.render();

const productInfo = new ProductInfo(productInfoContainer);

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
    const choosenProduct = e.target.closest('[data-id]');
    const idOfChoosenProduct = choosenProduct.closest('[data-id]').dataset.id;

    productInfo.render(idOfChoosenProduct);
    buyBtn.render().addEventListener('click', () => {
        form.render();

        document.getElementById('city').onchange = function(e) {
            const select = document.getElementById('postOffice');
            select.innerHTML = '';
            SelectField.addNewOptionsInHTML(select, postOffices[this.value]);
        }

        document.querySelector(form.getClassName()).onsubmit = function(e) {
            e.preventDefault();
            Validation.removeError(this);

            if (!Validation.validate(this)) {
                Validation.createError(this);
                return;
            }

            form.setFormData(this);
            
            const order = new Order(idOfChoosenProduct, form.getFormData());
            productInfoContainer.innerHTML = order.renderOrderInfo();

        }
    }, {once: true})
})