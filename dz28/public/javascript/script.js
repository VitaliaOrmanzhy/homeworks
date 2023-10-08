const productsList = new ProductsList(productsUl);

const categoriesList = new Categories(categoriesUl);
categoriesList.render();

const productInfo = new ProductInfo(productInfoContainer);

const showCategoriesBtn = new ButtonBasic(['header__btn'], 'Категорії', headerBtnsContainer);

const showOrdersBtn = new ButtonBasic(['header__btn'], 'Мої замовлення', headerBtnsContainer);

const buyBtn = new BuyBtn(['product-info__btn', 'btn'], 'Купити');

const orderList = new OrderList(ordersUl);

showCategoriesBtn.render().onclick = function() {
    ordersUl.innerHTML = '';
    categoriesList.render();

    if (productsUl.children.length != 0) {
        [...categoriesUl.children].find(category => {
            return category.dataset.name === productsUl.dataset.category
        })
        .classList.add('chosen-category');
    }
    
}

showOrdersBtn.render().onclick = function() {
    categoriesUl.innerHTML = '';

    if (orderList.getOrders().length != 0) {
        categoriesUl.innerHTML = '';
        orderList.render();
    } else {
        ordersUl.innerHTML = orderList.showMessage();
    }
}


ordersUl.addEventListener('change', function(e) {
    const elem = e.target.parentElement.nextElementSibling; 
    elem.classList.toggle('active');
})

ordersUl.addEventListener('click', function(e) {
    if (e.target.classList.contains('order__cancel')) {

        const allOrders = JSON.parse(localStorage.getItem('orders'));
        const orderItem = e.target.closest('.orders__item');

        for (let i = 0; i < allOrders.length; i++) {
            const elem = allOrders[i];

            if (elem.orderId == orderItem.dataset.id) {
                const index = allOrders.indexOf(elem);
                allOrders.splice(index, 1);
                orderList.setOrders(allOrders);

                orderItem.remove();

                if (orderList.getOrders().length == 0) {
                    ordersUl.innerHTML = orderList.showMessage();
                }

                 break;
        }
    }
}
})


categoriesUl.addEventListener('click', (e) => {
    if (document.querySelector('.chosen-category')) {
        document.querySelector('.chosen-category').classList.remove('chosen-category');
    }

    const button = e.target;
    button.classList.add('chosen-category');

    const chosenCategory = button.dataset.name;

    productsList.render(chosenCategory);
})


productsUl.addEventListener('click', function(e) {
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
            orderList.addOrder(order.getOrder());

            localStorage.setItem('orders', JSON.stringify(orderList.getOrders()));
            productInfoContainer.innerHTML = order.renderOrderInfo();

        }
    }, {once: true})
})