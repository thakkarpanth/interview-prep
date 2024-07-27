/*

    state wise operation 
    idle -> press insert cash button 
    hasMoney -> insert coin , select product button , press cancel / refund button
    selectionState -> product choose , press cancel / refund button, return change 
    dispencing -> product dispence 
*/

/* 
    standard question of state design pattern - design tv , vending machine
*/

class State {
    insertCoinButton(vendinMachine) {
        throw new Error()
    }
    insertCoin(vendinMachine) {
        throw new Error()
    }
    selectProductButton(vendinMachine) {
        throw new Error()
    }
    chooseProduct(vendinMachine) {
        throw new Error()
    }
    getChange() {
        throw new Error()
    }
    refundMoney() {
        throw new Error()
    }
    dispenseProduct() {
        throw new Error()
    }
}

class IdleState extends State {
    vendingMachineObj;
    constructor(vendingMachine) {
        this.vendingMachineObj = vendingMachine;
        this.vendingMachineObj.coins = [];
    }
    insertCoinButton() {
        machine.setState(new HasMoneyState());
    }
}

class HasMoneyState extends State {
    vendingMachineObj;
    constructor(vendingMachine) {
        this.vendingMachineObj = vendingMachine;
    }
    selectProductButton() {
        machine.setState(new SelectionState());
    }
    insertCoin(coin) {
        this.vendingMachineObj.coins.push(coin);
    }
}

class SelectionState extends State {

    vendingMachineObj;
    constructor(vendingMachine) {
        this.vendingMachineObj = vendingMachine;
    }

    chooseProduct() {
        machine.setState(new DispenseState());
    }

    refundMoney() {

    }

    getChange() {

    }
}

class DispenseState extends State {
    vendingMachineObj;
    constructor(vendingMachine) {
        this.vendingMachineObj = vendingMachine;
    }

    dispenseProduct() {
        
    }
}