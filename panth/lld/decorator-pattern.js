/* 
    used to prevent class explosion 
    
    class BaseCar {}
    class BaseCar + AC {}
    class BaseCar + PS {}
    class BaseCar + AC + PS {}

    note : decorator extends base class and also recieves object of base class
*/

class Pizza {
    cost() {
        return 10;
    }
}

class Margherita extends Pizza {
    cost() {
        return 50;
    }
}
class PaneerPizza extends Pizza {
    cost() {
        return 100;
    }
}

// decorator
class ExtraCheeze extends Pizza {
    pizza;
    constructor(pizza) {
        super();
        this.pizza = pizza; 
    }
    cost() {
        return this.pizza.cost() + 20;
    }
}

let pizza = new PaneerPizza(); 
pizza = new ExtraCheeze(pizza);
console.log('pizza price ', pizza.cost());
