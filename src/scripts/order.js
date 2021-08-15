class Order {

    constructor (currentLevel, currentPhase) {

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

    // Generates a 2D array of key-bindings(orders) based on current game's level and phase.
    generateRandomOrders() {                   
        const clevel = this.cl;
        const cphase = this.cp;
        const finalOrderArray = [];
        
        for (let i = 0; i < clevel; i++) { 
            const orderArray = [];
            orderArray.push(Order.leftKey)
            orderArray.push(this.drinkSizesKeyBindings[generateRandomIndex(this.drinkSizes)]);

            orderArray.push(Order.rightKey)
            orderArray.push(this.coffeeTypesKeyBindings[generateRandomIndex(this.coffeeTypes)]);

            for (let j = 0; j < cphase; j++) {
                orderArray.push(Order.rightKey)
                orderArray.push(this.toppingsKeyBindings[generateRandomIndex(this.toppings)]);
            }

            orderArray.push(Order.downKey)
            orderArray.push(this.temperatureKeyBindings[generateRandomIndex(this.temperature)]);
            finalOrderArray.push(orderArray)
        }
        return finalOrderArray;
    }

    generateRandomIndex(list) {
        return Math.floor(Math.random() * (list.length - 0.1));
    };

    // CATEGORY KEYS
    static leftKey = "ArrowLeft"    // Drink Size
    static rightKey = "ArrowRight"  // Coffee Type
    static upKey = "ArrowUp"      // Toppings
    static downKey = "ArrowDown"    // Temperature

    //INGREDIENT KEYS
    static DS_SMALL = "KeyQ";       // Drink Size: Small
    static DS_MEDIUM = "KeyW";      // Drink Size: Medium
    static DS_LARGE = "KeyE";       // Drink Size: Large

    static CTRC= "KeyA";            // Coffee Type: Regular Coffee
    static CTCB = "KeyS";           // Coffee Type: Cold Brew
    static CTL = "KeyD";            // Coffee Type: Latte
    static CTCAP = "KeyF";          // Coffee Type: Cappucino

    static TTAP = "KeyZ";           // Topping: Tapioca
    static TSUG = "KeyX";           // Topping: Sugar
    static TMILK = "KeyZ";          // Topping: Milk

    static TEMPHOT = "Digit1";      // Temperature: Hot
    static TEMPCOLD = "Digit2";     // Temperature: Cold
    
};

export default Order;