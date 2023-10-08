class ButtonBasic {
    constructor(classNames, textContent, container) {
        this.classNames = classNames;
        this.textContent = textContent;
        this.container = container;
    }

    render() {
        const btn = document.createElement('button');
        for (let className of this.classNames) {
            btn.classList.add(className);
        }
        
        btn.textContent = this.textContent;
        this.container.append(btn);

        return btn;
    }
}