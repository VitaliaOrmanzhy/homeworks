class Categories {
    constructor(container) {
        this.container = container;
    }

    getContainer() {
        return this.container;
    }

    render() {
        categories.map(({title, categoryName, hash}) => {
            this.getContainer().innerHTML += `<a class="category__item" href="#${hash}" data-name="${categoryName}">${title}</a>`
        })
    }
}