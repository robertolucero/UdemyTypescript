
const add = (a: number, b: number): number => {
    return a + b;
}

//always use annotations in functions. So add return type to functions.
const substract = (a: number, b: number) => {
    a - b;
}

function divide (a: number, b: number): number {
    return a/b;
}

const multiply = function (a:number, b:number): number {
    return a*b;
}

const logger = (message: string): void => {
    console.log(message);
}


