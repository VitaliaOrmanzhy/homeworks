class ProductsList {
    constructor(container) {
        this.container = container;
    }

    getContainer() {
        return this.container;
    }

    render(category) {
        let products = '';
        
        catalog.filter(item => item.category === category).map(({name, id, hash, category, img, info, price}) => {
            products += `
            <li class="product" data-id="${id}">
                <a href="#${hash}" class="product__container">
                    <div class="product__img-container">
                        <img src="./img/${img}" class="product__img" alt="">
                    </div>
                    <h2 class="product__name">${name}</h2>
                    <p class="product__price price">${price}</p>
                </a>
            </li>
            `
        })

        let html = `<ul class="products__list">${products}</ul>`

        this.getContainer().innerHTML = html;
    }
}