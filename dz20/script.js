const person1 = new Person('Name1', 'male');
const person2 = new Person('Name2', 'female');
const person3 = new Person('Name3', 'male');
const person4 = new Person('Name4', 'female');

const flat1 = new Flat();
flat1.addResidents([person1, person2]);

const flat2 = new Flat();
flat2.addResidents(person3);

const flat3 = new Flat();
flat3.addResidents(person4);


const building = new Building(4);

building.addFlat(flat1);
building.addFlat(flat1);
building.addFlats([flat1, flat2, flat3, flat1, flat2, flat3]);

console.log(building);