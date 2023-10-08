class Categories {
    constructor(container) {
        this.container = container;
    }

    render() {
        let html = '';
        categories.map(({title, categoryName, hash}) => {
            html += `<li class="category__item" data-name="${categoryName}"><a href="#" data-name="${categoryName}">${title}</a></li>`
        })

        this.container.innerHTML = html;
    }
}