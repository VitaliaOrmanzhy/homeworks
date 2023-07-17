const container = document.querySelector('.container');
//показать результат на странице
function toShowTheResult(message, res) {
    container.innerHTML += `<p>${message}: [${res}]</p>`;
}

const length = +prompt('Введіть довжину массиву');

let arr = [];

for (let i = 1; i <= length; i++) {
    arr.push(prompt('Введіть елемент массиву'));
}

arr.sort((a, b) => a - b);
toShowTheResult('Відсортований массив (від меншого до більшого)', arr);

let newArr = arr.filter(el => {
        return (el < '2' || el > '4');
});
toShowTheResult('Відфільтроаний масив', newArr);