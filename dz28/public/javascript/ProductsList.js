class ProductsList {
    constructor(container) {
        this.container = container;
    }

    render(category) {
        let html = '';
        
        catalog.filter(item => item.category === category).map(({name, id, hash, category, img, info, price}) => {
            html += `
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

        this.container.innerHTML = html;
        this.container.dataset.category = category;
    }
}