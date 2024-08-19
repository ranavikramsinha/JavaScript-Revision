//* Normal Function
function addNormalFunction(num1, num2){
    return num1 + num2;
}
console.log(addNormalFunction(5, 5));

//* Anonymous Function
const addAnonymousFunction = function(num1, num2){
    return num1 + num2;
}

console.log(addAnonymousFunction(5, 6));

//* Arrow Function
const addArrowFunction = (num1, num2) => {
    return num1 + num2;
}
console.log(addArrowFunction(6, 6));

//* Arrow Function implicit
const multiplyArrowFunctionImplicit = (num1, num2) => num1 * num2;
console.log(multiplyArrowFunctionImplicit(8, 8));

const squareArrowFunctionImplicit = num => num * num;
console.log(squareArrowFunctionImplicit(11));

//* Application with Array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let squareWithNormalFunction = numbers.map(function(num){
    return num * num;
})
console.log(squareWithNormalFunction);

let squareWithArrowFunction = numbers.map(num => num * num);
console.log(squareWithArrowFunction);

let filterEvenNumbers = numbers.filter(num => num % 2 === 0);
console.log(filterEvenNumbers);

let filterOddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(filterOddNumbers);

let total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total);

//* function that return a function
const createDouble = () => {
    return num => num * 2
}

const twice = createDouble();
console.log(twice(55));

console.log(createDouble()(66));