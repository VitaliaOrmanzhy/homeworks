class Validate {
    static validate(form) {

        if (!form.checkValidity()) {
            form.classList.add('error');

            Validate.createErrorMessage(form);
            return false;
        }

        return true;
    }

    static createErrorMessage(form) {
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('error__message');
        errorMessage.textContent = 'Заповніть поля коректно і спробуйте знову';
        form.append(errorMessage);
    }

    static removeError(form) {
        if (form.classList.contains('error')) {
            form.querySelector('.error__message').remove();
            form.classList.remove('error');
        }
    }
}

