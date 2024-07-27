/*
    avoids code duplication in child classes having same function by creating 
    interfaces. Here drive method in SportyVehicle and OffRoadVehicle are same 
    resulting in code duplication , we need to avoid this. 

class Vehicle {
    drive() {
        console.log('drive algorithm');
    }
    display() {
        console.log('display algorithm');
    }
    fuelCapacity() {
        console.log('fuel capacity algorithm');
    }
}

class PassengerVehicle extends Vehicle {

}

class SportyVehicle extends Vehicle {
    drive() {
        console.log('fancy driving algorithm');
    }
}

class OffRoadVehicle extends Vehicle {
    drive() {
        console.log('fancy driving algorithm');
    }
}

*/

class Drive {
    drive() {
        console.log('drive algorithm');
    }
}
class NormalDrive extends Drive {

}

class FancyDrive extends Drive {
    drive() {
        console.log('fancy drive algorithm');
    }
}

class Vehicle {
    driveStrategy; 
    constructor(params) {
        this.driveStrategy = params.driveStrategy;
    }
    drive() {
        this.driveStrategy.drive();
    }
    display() {
        console.log('display algorithm');
    }
    fuelCapacity() {
        console.log('fuel capacity algorithm');
    }
}

class PassengerVehicle extends Vehicle {
    constructor() {
        super({
            driveStrategy: new NormalDrive()
        });
    }
}

class SportyVehicle extends Vehicle {
    constructor() {
        super({
            driveStrategy: new FancyDrive()
        });
    }
}

class OffRoadVehicle extends Vehicle {
    constructor() {
        super({
            driveStrategy: new FancyDrive()
        });
    }
}

const passengerVehicle = new PassengerVehicle();
const offRoadVehicle = new OffRoadVehicle();
const sportyVehicle = new SportyVehicle(); 

passengerVehicle.drive();
offRoadVehicle.drive();
sportyVehicle.drive();