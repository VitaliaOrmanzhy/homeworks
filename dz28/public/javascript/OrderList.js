class OrderList {
    constructor(container) {
        this.container = container;
    }

    orders = JSON.parse(localStorage.getItem('orders')) != null ? JSON.parse(localStorage.getItem('orders')) : [];

    addOrder(orderItem) {
        this.orders.push(orderItem);
    }

    getOrders() {
        console.log(JSON.parse(localStorage.getItem('orders')) != null ? JSON.parse(localStorage.getItem('orders')) : [])
        return this.orders;
    }

    setOrders(ordersArr) {
        this.orders = ordersArr;
        localStorage.setItem('orders', JSON.stringify(ordersArr));
    }

    showMessage() {
        return '<p class="message">Ви поки що не додали жодного замовлення</p>';
    }

    render() {
        let html = '';
        this.orders.map(item => {
            html +=
            `<li class="orders__item" data-id="${item.orderId}">
                <a href="#" class="order__container">
                    <label class="order__label">
                        <input type="checkbox" class="order__checkbox"/>
                        <p class="order__date"><span class="order__span">Дата:</span> ${item.date}</p>
                        <p class="order__price"><span class="order__span">Ціна:</span> ${item.totalPayment}</p>
                        <button class="order__cancel">Відмінити замовлення</button>
                    </label>
                    <div class="order__details">
                        <p><span class="order__span">Назва товару:</span> ${item.product.name}</p>
                        <p><span class="order__span">Кількість:</span> ${item.amount}</p>
                        <p><span class="order__span">ПІБ:</span> ${item.costumer}</p>
                        <p><span class="order__span">Пошта:</span> ${item.postOffice}, ${item.city}</p>
                        <p><span class="order__span">Спосіб оплати:</span> ${item.paymentMethod}</p>
                    </div>
                </a>
            </li>`
        })

        this.container.innerHTML = html;

        return html;
    }
}