let num = 5;
// let result;
// if(num % 2 === 0){
//     result = 'Even';
// }
// else{
//     result = 'Odd'
// }

//* Ternary operator
let result = num % 2 === 0 ? 'Even' : 'Odd';
console.log(`This number is ${result}.`)

//* Guard Operator
let userName1 = ''; //* falsy values
let userName2 = 'Ashmita';
let defaultUserName = 'Guest';
let displayName1 = userName1 || defaultUserName;
let displayName2 = userName2 || defaultUserName;
console.log(`Hello ${displayName1}!`);
console.log(`Hello ${displayName2}!`);

//* Default Operator
let userName3 = null; //* null or undefined
let userName4 = 'Ashmita';
let userName5 = 0
let defaultUserName1 = 'Guest';
let displayName3 = userName3 ?? defaultUserName1;
let displayName4 = userName4 ?? defaultUserName1;
let displayName5 = userName5 ?? defaultUserName1;
console.log(`Hello ${displayName3}!`);
console.log(`Hello ${displayName4}!`);
console.log(`Hello ${displayName5}!`);