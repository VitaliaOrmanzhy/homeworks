class Validation {
    static validate(form) {
        let result = true;

        const selectsArr = [...form.elements].filter(el => el.nodeName == 'SELECT');
        selectsArr.map(el => {
            if (el.value == '0') {
                result = false
            }
        })

        if (!form.checkValidity()) {
            form.classList.add('error');

            result = false;
        }

        return result;
    }

    static createError(form) {
        form.classList.add('error');

        const errorMessage = document.createElement('div');
        errorMessage.classList.add('error__message');
        errorMessage.textContent = 'Заповніть поля коректно і спробуйте знов';

        form.append(errorMessage);
    }

    static removeError(form) {
        if (form.classList.contains('error')) {
            form.querySelector('.error__message').remove();
            form.classList.remove('error');
        }
    }
}

