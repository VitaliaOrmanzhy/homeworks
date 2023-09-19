class InputField extends InputBasic {

    constructor(classNames, attributes, labelName = null) {
        super(classNames, attributes, labelName);
    }

    render() {
        const input = document.createElement('input');
        this.classNames.map(className => input.classList.add(className));

        SetAttributes.setAttributes(input, this.attributes);

        if (this.labelName) {
            const label = document.createElement('label');
            label.classList.add('form__label');
            label.innerHTML += `<p>${this.labelName}</p>`;

            label.append(input);
            return label;
        }

        return input;
    }
}