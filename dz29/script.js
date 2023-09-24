const formContainer = document.querySelector('.form__container');
const form = document.querySelector('.form');

const getInputNames = (form) => {
    const set = new Set();
    [...form.elements].map(item => {
        if (item.dataset.name) set.add(item.dataset.name)
    });
    return Array.from(set);
}

const inputNames = getInputNames(form);


function getObjOfInputsVal(formData, inputNames) {
    const obj = {};

    let i = 0;
    for (let item of formData.values()) {
        obj[inputNames[i]] = item;
        i++;
    }

    console.log(obj);
    return obj;
}

function createFormTable(formData) {
    const inputsValObj = getObjOfInputsVal(formData, inputNames);

    const table = document.createElement('table');
    table.classList.add('table');

    for (let i = 0; i < 2; i++) {
        const tr = document.createElement('tr');

        for (let j = 0; j < Object.keys(inputsValObj).length; j++) {

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
        const formData = new FormData(form);
        formContainer.innerHTML = '';
        formContainer.append(createFormTable(formData));
    }
})

