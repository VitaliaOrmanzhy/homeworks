function sum(param) {
    let res = 0;

    sum = (param) => {
        return res += param;
    }

    return sum(param);
}

console.log(sum(3), sum(20))

let i = 0;
    for(; i < 5;) {
    	console.log(++i);
    }

function setName(name) {
    this.name = name;
}

function getSurname() {
    console.log(this.surname);
}

const obj = {
    surname : 'Ormanzhy'
}

const setNameOfObj = setName.bind(obj);
const surname = getSurname.bind(obj);
setNameOfObj('Vita');
surname();
console.log(obj);

const obj1 = {a: 1, b: 2, c: 3};

let {a, b, c} = obj1;

console.log(Object.assign({1: 2, 2: 3}, {3: 4, 4: 5}));

console.log(love);