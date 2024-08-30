import{add, subtract, multiply, divide} from './math.js';
// import * as math from './math.js';
import greet from './greet.js';
import cirecleArea, {squareArea} from './shapes.js';

let a = 10;
let b = 20;

let sum = add(a, b);
let diff = subtract(a, b);
let product = multiply(a, b);
let quotient = divide(a, b);


console.log(greet('Aryan'));
console.log(sum);
console.log(diff);
console.log(product);
console.log(quotient);
console.log(`Circle area with radius 3: ${cirecleArea(3)}`);
console.log(`Square area with side 4: ${squareArea(5)}`);

// let sum = math.add(a, b);
// let diff = math.subtract(a, b);
// let product = math.multiply(a, b);
// let quotient = math.divide(a, b);