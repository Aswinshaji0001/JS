class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        this.engineStarted = false;
    }
    startEngine() {
        if (!this.engineStarted) {
            this.engineStarted = true;
            console.log(`${this.brand} ${this.model} engine started.`);
        } else {
            console.log(`${this.brand} ${this.model} engine is already running.`);
        }
    }
    stopEngine() {
        if (this.engineStarted) {
            this.engineStarted = false;
            console.log(`${this.brand} ${this.model} engine stopped.`);
        } else {
            console.log(`${this.brand} ${this.model} engine is already off.`);
        }
    }
    drive() {
        if (this.engineStarted) {
            console.log(`Driving the ${this.brand} ${this.model}.`);
        } else {
            console.log(`Start the engine first before driving the ${this.brand} ${this.model}.`);
        }
    }
}
const myCar = new Car('Toyota', 'Corolla');

myCar.startEngine(); 
myCar.drive();       
myCar.stopEngine();  
myCar.drive();       
