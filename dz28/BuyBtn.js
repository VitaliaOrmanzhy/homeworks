class BuyBtn {

    className = 'product-info__btn';

    getClassName() {
        return this.className;
    }

    // buy(idOfProduct) {
    //     const productName = catalog.find(item => item.id == idOfProduct).name;
    //     return alert(`Товар '${productName}' куплений`);
    // }

    render() {
        const html = '<button class="product-info__btn btn">Купити</button>';
        document.querySelector('.button__container').innerHTML += html;
        return html;
    }
}