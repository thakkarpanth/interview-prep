/*
    this pattern is to avoid null condition checks
    if (!object) {

    }         
*/

class Vehicle {
    getTankCapacity() {}
    getSeatCapacity() {}
}

class Car extends Vehicle {
    getTankCapacity() {
        return 40;
    }
    getSeatCapacity() {
        return 5;
    }

}

class Bike extends Vehicle {
    getTankCapacity() {
        return 10;
    }
    getSeatCapacity() {
        return 2;
    }
}

class NullVehicle extends Vehicle {
    getTankCapacity() {
        return 0;
    }
    getSeatCapacity() {
        return 0;
    }
}