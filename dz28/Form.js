class Form {

    constructor(classNames, inputs, attributes) {
        this.classNames = classNames;
        this.inputs = inputs;
        this.attributes = attributes;
    }

    getClassName() {
        return this.classNames[0];
    }

    setFormData(form) {
        this.formData = new FormData(form);
    }

    getFormData() {
        return this.formData;
    }

    render() {
        const form = document.createElement('form');
        this.classNames.map(className => form.classList.add(className));

        SetAttributes.setAttributes(form, this.attributes);

        this.inputs.map(input => {
            form.append(input);
        })

        const submitBtn = new SubmitBtn(['form__submit'], 'Підтвердити').render()
        form.append(submitBtn);

        productInfoContainer.append(form);
    }
}