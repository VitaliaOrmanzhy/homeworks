class Categories {
    render() {
        categories.map(({title, categoryName, hash}) => {
            categoriesContainer.innerHTML += `<a class="category__item" href="#${hash}" data-name="${categoryName}">${title}</a>`
        })
    }
}