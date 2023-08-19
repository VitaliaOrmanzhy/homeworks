class Hamburger {
    size = '';
    filling = '';
    topping = '';
    price = 0;

    constructor(size, filling) {
       this.size = size;
       this.filling = filling;
    }

    addTopping(topping) {
        let count = 0;
        this.addTopping = function(topping) {
            this.topping = topping;
            count++;
        }
        return this.addTopping(topping);
    }

    calculateCalories() {
        this.calories = 0;
        for (let elem in info) {
            for (let item in info[elem]) {
                if (this[elem]) {
                    this.calories += info[elem][item]['calories'];
                }
                break;
            }
        }
        return this.calories;
    }

    calculatePrice() {
        this.price = 0;
        for (let elem in info) {
            for (let item in info[elem]) {
                if (this[elem]) {
                    this.price += info[elem][item]['price'];
                }
                break;
            }
        }
        return this.price;
    }
}
