const form = new Form(productInfoContainer, ['form'], [
    new InputField(['form__input'],
    {
        name: 'name',
        type: 'text',
        id: 'name',
        pattern: '^[а-яА-Я-яёЁЇїІіЄєҐґ]+(\-[а-яА-Я-яёЁЇїІіЄєҐґ]+)? [а-яА-Я-яёЁЇїІіЄєҐґ]+(\-[а-яА-Я-яёЁЇїІіЄєҐґ]+)? [а-яА-Я-яёЁЇїІіЄєҐґ]+(\-[а-яА-Я-яёЁЇїІіЄєҐґ]+)?$',
        required: '',
        placeholder: 'ПІБ'
    }).render(),

    new SelectField(['form__select'],
    {
        name: 'city',
        id: 'city',
        required: '',
    },
    [{
        title: 'Оберіть місто',
        attributes : {
            value: '0',
            selected: '',
            disabled: ''
        },   
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
    }]).render(),

    new SelectField(['form__select'], 
        {
            name: 'postOffice',
            id: 'postOffice',
            required: ''
        }, 
        [{
            title: 'Оберіть поштове відділення',
                attributes: {
                    value: '0',
                    disabled: '',
                    selected: '',
                }
        }]).render(),
    
    new InputField(['form__radio'], {name: 'payment', type: 'radio', value:'1'}, 'Післяплата').render(),
    new InputField(['form__radio'], {name: 'payment', type: 'radio', value:'2', checked: ''}, 'Оплата картою').render(),
    new InputField(['form__input'], {name: 'amount', type: 'number', value:1, max:50, min:1, placeholder:'Кількість одиниць'}).render(),
    new InputField(['form__textarea'], {name: 'comment', maxLength: 100, placeholder:'Коментар до замовлення'}).render()
],
{novalidate: ''});
