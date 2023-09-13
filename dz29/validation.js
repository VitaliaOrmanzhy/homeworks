//валидация имени и фамилии
function validateNameSurname(nameSurname) {
    const regexp1 = /^[^a-zA-Z]+ [^a-zA-Z]+$/;
    const regexp2 = /^\w+ \w+$/;
    return regexp1.test(nameSurname.toLowerCase()) || regexp2.test(nameSurname.toLowerCase());
}

//валидация даты рождения
function validateDateOfBirth(dateOfBirth) {
    const regexp = /\d{2}[\.-|\/]\d{2}[\.-|\/][\d{2}|\d{4}]/;
    return regexp.test(dateOfBirth);
}

//валидация чекбоксов. параметр - контейнер с инпутами
function validateCheckboxes(inputsContainer) {
    let result = false;
    const inputs = inputsContainer.querySelectorAll('.form__input');

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            result = true;
            break;
        }
    }

    return result;
}

//валидация формы
function validate(form) {
    let result = true;

    const inputs = form.querySelectorAll('.form__input');

    let inputNameSurname = form.elements.name,
        inputDate = form.elements.date;
        checkboxesContainers = form.querySelectorAll('.checkboxes__container');
    
    let inputNameSurnameVal = inputNameSurname.value,
        inputDateVal = inputDate.value;
    

    for (let item of inputs) {
        removeError(item);

        const inputValue = item.value;

        if (item.dataset.maxLength) {
            if (inputValue.length > item.dataset.maxLength) {
                removeError(item);
                createError(item, `Максимальна кількість символів: ${item.dataset.maxLength}`);
                result = false;
            }
        }

        if (item.dataset.minLength) {
            if (inputValue.length < item.dataset.minLength) {
                removeError(item);
                createError(item, `Мінімальна кількість символів: ${item.dataset.minLength}`);
                result = false;
            }
        }

        if (inputValue === '') {
            removeError(item);
            createError(item, 'Поле порожнє');
            result = false;
        }
    }

    for (let item of checkboxesContainers) {
        const input = item.querySelector('.form__input');
        removeError(input);
        
        if(!validateCheckboxes(item)) {
            createError(input, 'Виберить один або декілька варіантів');
            result = false;
        }
    }

    if (!validateNameSurname(inputNameSurnameVal)) {
        if (!inputNameSurname.parentElement.classList.contains('error')) {
            createError(inputNameSurname, 'Введіть ім\'я та призвище через пробел');
        }
        result = false;  
    }

    if (!validateDateOfBirth(inputDateVal)) {
        if (!inputDate.parentElement.classList.contains('error')) {
            createError(inputDate, 'Неправильний формат дати');
        }
        result = false;
    }

    return result;
}