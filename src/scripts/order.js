
class Order {

    constructor (ctx, customer,currentLevel) {

        this.ctx = ctx,
        this.customer = customer,
        this.currentLevel = currentLevel,

        this.drinkSizes = ["S", "M", "L"],
        this.drinkSizesKeyBindings = [81, 87, 69],

        this.coffeeTypes = ["Regular Coffee", "Cold Brew", "Latte", "Cappucino"],
        this.coffeeTypesKeyBindings = [65, 83, 68, 70],

        this.toppings = ["Tapioca", "Sugar", "Milk"],
        this.toppingsKeyBindings = [90, 88, 67],

        this.temperature = ["Hot", "Cold"],
        this.temperatureKeyBindings = [49, 50]
        
    }

    generateRandomOrder() {
        const level = this.currentLevel;
        const orderArray = [];
        for (let i = 0; i < level; i++) { 
            orderArray.push(this.drinkSizesKeyBindings[generateRandomIndex(this.drinkSizes)]);
            orderArray.push(this.coffeeTypesKeyBindings[generateRandomIndex(this.coffeeTypes)]);
            for (let j = 0; j < level; j++) {
                orderArray.push(this.toppingsKeyBindings[generateRandomIndex(this.toppings)]);
            }
            orderArray.push(this.temperatureKeyBindings[generateRandomIndex(this.temperature)]);

        }
        return orderArray;
    }

    generateRandomIndex(list) {
        return Math.ceil(Math.random() * (list.length - 1));
    };

    
};

export default Order;