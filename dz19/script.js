class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.getInfo = function() {
            console.log(`Ім'я: ${this.name}, вік: ${this.age}`);
        }
    }
}

class Vehicle {
    constructor(brand, model, year, licensePlate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;

        this.setOwner = function(owner) {
            owner.age >= 18 ? this.owner = owner : console.log('Власнику менше 18-ти років.');
        }

        this.getInfo = function() {
            if (this.owner) {
                console.log(`Brand: ${this.brand}
Model: ${this.model}
Year: ${this.year}
License plate: ${this.licensePlate}`)

                this.owner.getInfo();
            }
            
        }
    }
}

const person1 = new Person('Анна', '17');
const person2 = new Person('Микола', '48');

const bmw = new Vehicle('BMW', 'X5 xDrive40i', 'since 2018', 'ВН9999СХ');
const toyota = new Vehicle('Toyota', 'Prius', '2015', 'ВН1111ОА');

bmw.setOwner(person1);
bmw.getInfo();

toyota.setOwner(person2);
toyota.getInfo()