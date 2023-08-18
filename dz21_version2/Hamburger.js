class Hamburger {
    constructor(size, filling) {
        this.properties = {
            'size': size,
            'filling': filling,
        };
    }

    static SIZE_SMALL = {
        calories: 20,
        price: 50     
    }

    static SIZE_BIG = {
        calories: 40,
        price: 100  
    }

    static STUFFING_CHEESE = {
        calories: 20,
        price: 10
    }

    static SALAD = {
        calories: 5,
        price: 20
    }

    static POTATO = {
        calories: 10,
        price: 15
    }

    static TOPPING_SAUCE = {
        calories: 0,
        price: 15
    }

    static TOPPING_MAYO = {
        calories: 15,
        price: 20
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