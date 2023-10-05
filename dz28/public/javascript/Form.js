class Form {

    constructor(container, classNames, inputs, attributes) {
        this.container = container;
        this.classNames = classNames;
        this.inputs = inputs;
        this.attributes = attributes;
    }

    getContainer() {
        return this.container;
    }

    getClassName() {
        return this.classNames[0];
    }

    getClassNames() {
        return this.classNames;
    }

    setFormData(form) {
        this.formData = new FormData(form);
    }

    getFormData() {
        return this.formData;
    }

    render() {
        const form = document.createElement('form');
        this.getClassNames().map(className => form.classList.add(className));

        SetAttributes.setAttributes(form, this.attributes);

        this.inputs.map(input => {
            form.append(input);
        })

        const submitBtn = new SubmitBtn(['form__submit'], 'Підтвердити').render()
        form.append(submitBtn);

        this.getContainer().append(form);
    }
}