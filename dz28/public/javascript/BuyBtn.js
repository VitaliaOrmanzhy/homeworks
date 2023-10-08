class BuyBtn extends ButtonBasic {
    constructor(classNames, textContent) {
        super(classNames, textContent);
    }

    render() {
        const btn = document.createElement('button');
        for (let className of this.classNames) {
            btn.classList.add(className);
        }
        
        btn.textContent = this.textContent;
        document.querySelector('.button__container').append(btn);

        return btn;
    }
}