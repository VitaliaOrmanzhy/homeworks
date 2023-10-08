class SubmitBtn extends ButtonBasic {
    constructor(classNames, textContent) {
        super(classNames, textContent, null);
    }

    render() {
        const button = document.createElement('button');

        this.classNames.map(className => {
            button.classList.add(className);
        })
        
        button.setAttribute('type', 'submit');
        button.textContent = this.textContent;

        return button;
    }
}