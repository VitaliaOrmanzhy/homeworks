class BuyBtn {

    classNames = ['product-info__btn', 'btn'];
    textContent = 'Купити'

    getClassNames() {
        return this.classNames;
    }

    getTextContent() {
        return this.textContent;
    }

    // buy(idOfProduct) {
    //     const productName = catalog.find(item => item.id == idOfProduct).name;
    //     return alert(`Товар '${productName}' куплений`);
    // }

    render() {
        const btn = document.createElement('button');
        for (let className of this.getClassNames()) {
            btn.classList.add(className);
        }
        
        btn.textContent = this.getTextContent();
        document.querySelector('.button__container').append(btn);

        return btn;
    }
}