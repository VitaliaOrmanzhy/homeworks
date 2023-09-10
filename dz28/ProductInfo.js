class ProductInfo {

    render(idOfProduct) {
        const product = catalog.find(item => item.id == idOfProduct);
        const productInfo = product.info;

        let info = '';
        productInfo.map(item => {
            info += `<p class="product-info__paragraph">${item}</p>`
        })

        info += `<p class="product-info__price">Price: <span class="price">${product.price}<span></p>
        <div class="button__container"></div>`;

        productInfoContainer.innerHTML = info;
    }
}