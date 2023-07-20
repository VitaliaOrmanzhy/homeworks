function removeElement(array, item) {
    return array.splice(array.indexOf(item), 1);
}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);