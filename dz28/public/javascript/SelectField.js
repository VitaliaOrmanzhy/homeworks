class SelectField extends InputBasic {
    constructor(classNames, attributes, options) {
        super(classNames, attributes, null);
        this.options = options;
    }

    static addNewOptionsInHTML(input, options) {
        options.map((item) => {
            const option = document.createElement('option');
            option.classList.add('form__option');

            SetAttributes.setAttributes(option, item.attributes);
            option.textContent = item.title;
            input.append(option);
        })
    }
    

    render() {
        const select = document.createElement('select');
        this.classNames.map(className => select.classList.add(className));

        SetAttributes.setAttributes(select, this.attributes);

        this.options.map((item) => {
            const option = document.createElement('option');
            option.classList.add('form__option');

            SetAttributes.setAttributes(option, item.attributes);
            option.textContent = item.title;
            select.append(option);
        })

        return select;
    }
}