class Vehicle{

    constructor(color: string) {
        this.color = color
    }


    color: string = 'red';
    drive(): void {
        console.log('Driving...')
    };  
    honk(): void {
        console.log('Honking...')
    };
}

class Car extends Vehicle {
    drive(): void {
        console.log('Driving a car...')
    };
    honk(): void {
        console.log('Honking from a car...')
    };
}



const vehicle = new Car('blue');

console.log(vehicle.color);
vehicle.drive();
vehicle.honk();