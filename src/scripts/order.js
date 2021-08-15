class Order {

    constructor (ctx, currentLevel, currentPhase) {

        this.ctx = ctx,
        // this.customer = customer,
        this.cl = currentLevel,
        this.cp = currentPhase

        //event.code
        this.drinkSizes = ["S", "M", "L"],  
        this.drinkSizesKeyBindings = ["KeyQ", "KeyW", "KeyE"],

        this.coffeeTypes = ["Regular Coffee", "Cold Brew", "Latte", "Cappucino"],
        this.coffeeTypesKeyBindings = ["KeyA", "KeyS", "KeyD", "KeyF"],

        this.toppings = ["Tapioca", "Sugar", "Milk"],
        this.toppingsKeyBindings = ["KeyZ", "KeyX", "KeyC"],

        this.temperature = ["Hot", "Cold"],
        this.temperatureKeyBindings = ["Digit1", "Digit2"]
    }

    generateRandomOrder() {
        const clevel = this.cl;
        const cphase = this.cp;
        const finalOrderArray = [];
        
        for (let i = 0; i < clevel; i++) { 
            const orderArray = [];

            orderArray.push(this.drinkSizesKeyBindings[generateRandomIndex(this.drinkSizes)]);
            orderArray.push(this.coffeeTypesKeyBindings[generateRandomIndex(this.coffeeTypes)]);

            for (let j = 0; j < cphase; j++) {
                orderArray.push(this.toppingsKeyBindings[generateRandomIndex(this.toppings)]);
            }

            orderArray.push(this.temperatureKeyBindings[generateRandomIndex(this.temperature)]);
            finalOrderArray.push(orderArray)
        }
        return finalOrderArray;
    }

    generateRandomIndex(list) {
        return Math.ceil(Math.random() * (list.length - 1));
    };

    static inputKeys(event) {

        // Category keys
        const LEFT_KEY = "ArrowLeft"; // Drink Size
        const RIGHT_KEY = "ArrowRight"; // Coffee Type
        const UP_KEY = "ArrowUp"; // Toppings
        const DOWN_KEY = "ArrowDown"; // Temperature

        //INGREDIENT KEYS
        const DS_SMALL = "KeyQ"; // Drink Size: Small
        const DS_MEDIUM = "KeyW"; // Drink Size: Medium
        const DS_LARGE = "KeyE"; // Drink Size: Large

        const CTRC= "KeyA"; // Coffee Type: Regular Coffee
        const CTCB = "KeyS"; // Coffee Type: Cold Brew
        const CTL = "KeyD"; // Coffee Type: Latte
        const CTCAP = "KeyF"; // Coffee Type: Cappucino

        const TTAP = "KeyZ"; // Topping: Tapioca
        const TSUG = "KeyX"; // Topping: Sugar
        const TMILK = "KeyZ"; // Topping: Milk

        const TEMPHOT = "Digit1" // Temperature: Hot
        const TEMPCOLD = "Digit2" // Temperature: Cold
        
    }




};

export default Order;