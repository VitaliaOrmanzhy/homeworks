
class Hamburger extends Info {
    constructor(size, filling) {
        super();
        this.properties = {
            'size': size,
            'filling': filling,
        };
    }



    addTopping(topping) {
        let count = 0;
        this.addTopping = function(topping) {
            this.properties[`topping${count}`] = topping;
            count++;
        }
        return this.addTopping(topping);
    }

    calculateCalories() {
        this.calories = 0;
        for (let el in this.properties) {
            if (this.properties[el]) {   
                this.calories += this.properties[el]['calories'];
            }    
        }

        return this.calories;
    }

    calculatePrice() {
        this.price = 0;
        for (let el in this.properties) {
            if (this.properties[el]) {
                this.price += this.properties[el]['price'];
            }
        }

        return this.price;
    }
}