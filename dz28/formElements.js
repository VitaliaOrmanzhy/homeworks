const form = new Form();

form.addField(
    'input',
    'form__input',
    {
        name: 'name',
        type: 'text',
        id: 'name',
        pattern: '^(a-zA-Z)+ (a-zA-Z)+ (a-zA-Z)+$',
        required: '',
    }, 
    'ПІБ'
);

form.addField(
    'select',
    'form__select',
    {
        name: 'city',
        id: 'city',
        required: ''
    }
)

form.addOptions(
    form.inputs[1], 
    [
        {
            attributes : {
                name: 'city',
                value: '',
                selected: '',
                disabled: ''
            },
            title: 'Оберіть місто'
        },
        {
            attributes : {
                name: 'city',
                value: 'kyiv',
            },
            title: 'Київ'
        },
        {
            attributes : {
                name: 'city',
                value: 'odesa',
            },
            title: 'Одеса'
        },
        {
            attributes : {
                name: 'city',
                value: 'kharkiv',
            },
            title: 'Харків'
        }
    ]
)

form.addField(
    'select',
    'form__select',
    {
        name: 'postOffice',
        id: 'postOffice',
        required: ''
    },
    null
)

form.addOptions(form.inputs[2], [{title: 'Оберіть поштове відділення', attributes: {name: 'postOffice', value: '0', disabled: '', selected: '', required:''}}]);

form.addField('input', 'form__radio', {name: 'payment', type: 'radio'}, 'Післяплата');
form.addField('input', 'form__radio', {name: 'payment', type: 'radio', checked: ''}, 'Оплата картою');

form.addField('input', 'form__input', {name: 'amount', type: 'number', value:1, max:50, min:1}, 'Кількість одиниць');
form.addField('textarea', 'form__textarea', {name: 'comment', maxLength: 100}, 'Коментар до замовлення');