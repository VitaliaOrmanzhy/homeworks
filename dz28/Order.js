class Order {
    constructor(productId, formData) {
        this.productId = productId;
        this.formData = formData;
        this.choosenProduct = catalog.find(elem => elem.id == this.productId);
        this.order = Object.assign(this.choosenProduct, {
            totalPayment: this.getTotalPayment(),
            city: this.getCity(),
            postOffice: this.getPostOfficeTitle(),
            comment: this.getComment()
        })
    }

    getOrder() {
        return this.order;
    }

    getCity() {
        return this.formData.get('city');
    }

    getTotalPayment() {
        return +this.formData.get('amount') * +this.choosenProduct.price;
    }

    getPostOfficeTitle() {
        return postOffices[this.formData.get('city')].find(el => el.attributes.value = this.formData.get('postOffice')).title; 
    }

    getComment() {
        return this.formData('comment');
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