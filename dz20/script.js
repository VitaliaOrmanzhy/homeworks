const person1 = new Person('Name1', 'male');
const person2 = new Person('Name2', 'female');
const person3 = new Person('Name3', 'male');

const flat1 = new Flat();
flat1.addResidents([person1, person2]);

const flat2 = new Flat();
flat2.addResidents([person3]);

const building = new Building(70);
building.addFlat([flat1, flat2]);

console.log(building);