class ProductInfo {

    render(idOfProduct) {
        const product = catalog.find(item => item.id == idOfProduct);
        const productName = product.name;
        const productInfo = product.info;

        let info = `<h2 class="product-info__title">${productName}</h2>`;
        productInfo.map(item => {
            info += `<p class="product-info__paragraph">${item}</p>`
        })

        info += `<p class="product-info__price">Ціна: ${product.price}</p>
        <div class="button__container"></div>`;

        // productInfoContainer.innerHTML = info;
        return info;
    }
}