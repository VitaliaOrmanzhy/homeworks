const car = { brand: "", model: "", color: "" };
const updatedProperties = { type: "" };

Object.assign(car, updatedProperties);

const electro = Object.assign({}, car, { type: "electro", maxDistance: 0 });
const common = Object.assign({}, car, { type: "common", gas: "", gearBox: "" });

console.log('electro', electro);
console.log('common', common);

const models = {
    tesla: {...electro, brand: "Tesla", model: "S Plaid", maxDistance: 850},
    leaf: {...electro, brand: "Nissan", model: "Leaf", maxDistance: 270},
    x5: { ...common, brand: "BMW", model: "X5", gearBox: "auto" },
    kenga: {...common, brand: "Renault", model: "Kangoo", gearBox: "mechanic"}
};

console.log('models', models);


for (let key in models) {
    const properties = [];
    Object.entries(models[key]).forEach(([key, val]) => {
       val != '' ? properties.push(`${key}: ${val}`) : false;
    })

    console.log(`${key}
${properties.join(', ')}`);
}