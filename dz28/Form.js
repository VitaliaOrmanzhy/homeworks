class Form {

    inputs = [];

    renderForm() {
        const form = document.createElement('form');
        form.classList.add('form');
        form.setAttribute('novalidate', '');

        this.inputs.map(item => form.append(item));

        const submitBtn = document.createElement('button');
        submitBtn.type = 'submit';
        submitBtn.textContent = 'Підтвердити'
        submitBtn.classList.add('form__submit');

        form.append(submitBtn);
        productInfoContainer.append(form);
    }

    addField(tag, className, attributes, label, textContent = null) {
        const input = document.createElement(tag);
        input.classList.add(className);

        if (textContent) {
            input.textContent = textContent;
        }

        SetAttributes.setAttributes(input, attributes);
        
        if (label) {
            const labelHTML = document.createElement('label');
            labelHTML.classList.add('form__label');
            labelHTML.innerHTML += `<p>${label}</p>`;
            labelHTML.append(input);

            this.inputs.push(labelHTML);
            return;
        }

        this.inputs.push(input);
    }

    addOptions(input, options) {
        options.map((item) => {
            const option = document.createElement('option');
            option.classList.add('form__option');
            SetAttributes.setAttributes(option, item.attributes);
            option.textContent = item.title;

            input.append(option);
        })
    }

    removeOptions(input) {
        input.innerHTML = ''
    }
}

// class Form {

//     inputs = [];

//     renderForm() {
//         const form = document.createElement('form');
//         form.classList.add('form');

//         const submitBtn = document.createElement('button');
//         submitBtn.type = 'submit';
//         submitBtn.textContent = 'Підтвердити'
//         submitBtn.classList.add('form__submit');

//         form.append(submitBtn);
//         productInfoContainer.append(form);
//     }

//     addField(tag, className, attributes, label, textContent = null) {
//         const form = document.querySelector('.form');

//         const input = document.createElement(tag);
//         input.classList.add(className);

//         if (textContent) {
//             input.textContent = textContent;
//         }

//         SetAttributes.setAttributes(input, attributes);
        
//         if (label) {
//             const labelHTML = document.createElement('label');
//             labelHTML.classList.add('form__label');
//             labelHTML.innerHTML += `<p>${label}</p>`;
//             labelHTML.append(input);

//             this.inputs.push(label);
//             form.append(labelHTML);
//             return;
//         }

//         this.inputs.push(input);
//         form.append(input);
//     }

//     addOptions(input, options) {
//         options.map((item) => {
//             const option = document.createElement('option');
//             option.classList.add('form__option');
//             SetAttributes.setAttributes(option, item.attributes);
//             option.textContent = item.title;

//             input.append(option);
//         })
//     }

//     removeOptions(input) {
//         input.innerHTML = ''
//     }
// }
