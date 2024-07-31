// function greeting(){
//     console.log('Hello Rana!');
// }
// greeting();

function getRandomOption(){
    let randomOption = Math.floor(Math.random() * 10);
    console.log(randomOption);
    return randomOption;
}

let myNumber = getRandomOption();

console.log(`Random number between 0 and 9 is: ${myNumber}`);

function getSum(num1, num2){
    let sum = num1 + num2;
    return sum;
}

console.log(getSum(5, 5));
console.log(getSum(5, 1000));