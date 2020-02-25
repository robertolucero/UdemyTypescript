const carMakers = ['ford','totyota','chevy'];

const carsByMake : string[][] = [];

carMakers.map((car: string): string => {
    return car.toLocaleLowerCase();
})