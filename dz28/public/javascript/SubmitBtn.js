class SubmitBtn {
    constructor(classNames, textContent) {
        this.classNames = classNames;
        this.textContent = textContent;
    }

    render() {
        const button = document.createElement('button');
        button.classList.add('form__submit');
        button.setAttribute('type', 'submit');
        button.textContent = this.textContent;

        return button;
    }
}