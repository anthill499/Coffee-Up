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
            orderArray.push(Order.categoryKeys["leftKey"])
            orderArray.push(this.drinkSizesKeyBindings[this.generateRandomIndex(this.drinkSizes)]);

            orderArray.push(Order.categoryKeys["rightKey"])
            orderArray.push(this.coffeeTypesKeyBindings[this.generateRandomIndex(this.coffeeTypes)]);

            for (let j = 0; j < cphase; j++) {
                orderArray.push(Order.categoryKeys["upKey"])
                orderArray.push(this.toppingsKeyBindings[this.generateRandomIndex(this.toppings)]);
            }

            orderArray.push(Order.categoryKeys["downKey"])
            orderArray.push(this.temperatureKeyBindings[this.generateRandomIndex(this.temperature)]);
            finalOrderArray.push(orderArray)
        }
        return finalOrderArray;
    };

    generateRandomIndex(list) {
        return Math.floor(Math.random() * (list.length));
    };

    // CATEGORY KEYS
    static categoryKeys = {
        leftKey: "ArrowLeft",    // Drink Size
        rightKey: "ArrowRight",  // Coffee Type
        upKey: "ArrowUp",      // Toppings
        downKey: "ArrowDown"    // Temperature
    }

    //INGREDIENT KEYS
    static ingredientKeys = {
        DS_SMALL:"KeyQ",        // Drink Size: Small
        DS_MEDIUM: "KeyW",      // Drink Size: Medium
        DS_LARGE: "KeyE",       // Drink Size: 
        CTRC: "KeyA",           // Coffee Type: Regular Coffee
        CTCB: "KeyS",           // Coffee Type: Cold Brew
        CTL: "KeyD",            // Coffee Type: Latte
        CTCAP: "KeyF",          // Coffee Type: Cap    
        TTAP: "KeyZ",           // Topping: Tapioca
        TSUG: "KeyX",           // Topping: Sugar
        TMILK: "KeyZ",          // Topping: Milk 
        TEMPHOT: "Digit1",      // Temperature: Hot
        TEMPCOLD: "Digit2"      // Temperature: Cold
    }

    // event.Code corresponding to their String values
    static drinkDictionary = {
        "ArrowLeft": "Drink Size",
        "ArrowRight": "Coffee Type",
        "ArrowUp": "Toppings",
        "ArrowDown": "Temperature",
        "KeyQ": "Small",       
        "KeyW": "Medium",
        "KeyE": "Large",      
        "KeyA": "Regular Coffee",
        "KeyS": "Cold Brew",
        "KeyD": "Latte",
        "KeyF": "Cap",    
        "KeyZ": "Tapioca",
        "KeyX": "Sugar",        // Topping: Sugar
        "KeyZ": "Milk",         // Topping 
        "Digit1": "Hot",      // Temperature: Hot
        "Digit2": "Cold"      // Temperature: Cold
    };
};

export default Order;