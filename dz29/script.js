const formContainer = document.querySelector('.form__container');
const form = document.querySelector('.form');

function getObjOfInputsVal(inputContainersArr) {
    const obj = {};

    inputContainersArr.map((item) => {
        const inputs = item.querySelectorAll('.form__input');

        const inputContainerName = item.dataset.name;
        const inputsVal = [];

        for (let input of inputs) {
            if ((input.type == 'radio' || input.type == 'checkbox') && !input.checked) {
                continue;
            }

            inputsVal.push(input.value);
        }

        obj[inputContainerName] = inputsVal;
    })

    return obj;
}

function createFormTable(form) {
    const inputContainers = form.querySelectorAll('.input__container');
    const inputsValObj = getObjOfInputsVal([...inputContainers]);

    const table = document.createElement('table');
    table.classList.add('table');

    for (let i = 0; i < 2; i++) {
        const tr = document.createElement('tr');

        for (let j = 0; j < inputContainers.length; j++) {

            if (i == 0) {
                const th = document.createElement('th');
                th.textContent = Object.keys(inputsValObj)[j];
                tr.append(th);
            } else {
                const td = document.createElement('td');
                td.textContent = Object.values(inputsValObj)[j];
                tr.append(td);
            }
        }

        table.append(tr);
    }

    return table;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (form.checkValidity()) {
        formContainer.innerHTML = '';
        formContainer.append(createFormTable(form));
    }
})

