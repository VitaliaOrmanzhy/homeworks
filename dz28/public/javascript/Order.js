class Order {
    constructor(productId, formData) {
        this.productId = productId;
        this.formData = formData;
        this.date = new Date();
        this.choosenProduct = catalog.find(elem => elem.id == this.productId);
        this.order = {
            orderId: this.generateOrderId(),
            product: this.choosenProduct,
            totalPayment: this.getTotalPayment(),
            city: this.getCity(),
            costumer: this.getCostumer(),
            amount: this.getAmount(),
            paymentMethod: this.getPaymentMethod(),
            postOffice: this.getPostOfficeTitle(),
            comment: this.getComment(),
            date: this.getDate()
        }
    }

    generateOrderId() {
        return Math.floor(Math.random() * 10000);
    }

    getDate() {
        return `${this.date.getDate()}.${this.date.getMonth()}.${this.date.getFullYear()}`;
    }

    getOrder() {
        return this.order;
    }

    getCity() {
        const val = this.formData.get('city');
        return cities[val];
    }

    getCostumer() {
        return this.formData.get('name');
    }

    getAmount() {
        return this.formData.get('amount');
    }

    getPaymentMethod() {
        const value = this.formData.get('payment');
        return value == 1 ? 'Післяплата' : 'Оплата картою'; 
    }


    getTotalPayment() {
        return +this.formData.get('amount') * +this.choosenProduct.price;
    }

    getPostOfficeTitle() {
        return postOffices[this.formData.get('city')].find(el => el.attributes.value = this.formData.get('postOffice')).title; 
    }

    getComment() {
        return this.formData.get('comment');
    }

    renderOrderInfo() {
        return `
        <div class="order-info__container">
            <table class="table">
                <tr>
                    <th>Назва</th>
                    <th>Кількість</th>
                </tr>
                <tr>
                    <td>${this.choosenProduct.name}</td>
                    <td>${this.formData.get('amount')}</td>
                </tr>
                <tr>
                    <th>Поштове відділення</th>
                    <th>Оплата</th>
                </tr>
                <tr>
                    <td>${this.getPostOfficeTitle()}</td>
                    <td>${this.getTotalPayment()}</td>
                </tr>
            </table>
        </div>`
    }
}