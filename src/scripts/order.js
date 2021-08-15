
class Order {

    constructor (ctx, customer,currentLevel, currentPhase) {

        this.ctx = ctx,
        this.customer = customer,
        this.cl = currentLevel,
        this.cp = currentPhase

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
        const clevel = this.cl;
        const cphase
        const orderArray = [];
        for (let i = 0; i < clevel; i++) { 
            orderArray.push(this.drinkSizesKeyBindings[generateRandomIndex(this.drinkSizes)]);
            orderArray.push(this.coffeeTypesKeyBindings[generateRandomIndex(this.coffeeTypes)]);

            for (let j = 0; j < cphase; j++) {
                orderArray.push(this.toppingsKeyBindings[generateRandomIndex(this.toppings)]);
            }

            orderArray.push(this.temperatureKeyBindings[generateRandomIndex(this.temperature)]);
        }
        return orderArray;
        //level 1
    }

    generateRandomIndex(list) {
        return Math.ceil(Math.random() * (list.length - 1));
    };

    static inputKeys(event) {
        const LEFT_KEY = 37;
        const RIGHT_KEY = 39;
        const UP_KEY = 38;
        const DOWN_KEY = 40;

        const keyPressed = event.keyCode;
        const goingUp = dy === -10;
        const goingDown = dy === 10;
        const goingRight = dx === 10;
        const goingLeft = dx === -10;



    }

};



export default Order;