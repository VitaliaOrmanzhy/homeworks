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
    const choosenProduct = e.target.closest('[data-id]');
    const idOfChoosenProduct = choosenProduct.closest('[data-id]').dataset.id;

    productInfo.render(idOfChoosenProduct);
    buyBtn.render();

    const productInfoBtn = document.querySelector(`.${buyBtn.getClassName()}`);

    productInfoBtn.addEventListener('click', () => {

        form.renderForm();

        document.getElementById('city').onchange = function() {
            const value = this.value;
            const postOfficeInput = document.getElementById('postOffice');
            
            form.removeOptions(postOfficeInput);
            form.addOptions(postOfficeInput, postOffices[value]);
        }

        const formHTML = document.forms[0];
        formHTML.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (Validate.validate(this)) {
                Validate.removeError(this);
                form.data = new FormData(formHTML);
                this.submit();
            };
            
        }, {once : true});
    })
})