const generateList = (array) => {
    const ul = document.createElement('ul');
    array.map(item => {
        console.log(item);
        const li = document.createElement('li');
        Array.isArray(item) ? li.append(generateList(item)) : li.textContent = item;
        ul.append(li);
    })

    return ul;
}

document.body.append(generateList([1,2,3, [1, 2, [1, 2]], 4,5]))