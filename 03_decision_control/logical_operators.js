console.log("&& Operator")
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("|| Operator")
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log("Not Operator");
console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);

let num = -85;

if(num > 0 && num % 2 === 0){
    console.log("Positive and Even Number")
}
// else if(num > 0){
//     console.log("Positive and Odd Number")
// }
else if(num > 0 && num % 2 !== 0){
    console.log("Positive and Odd Number")
}
else if(num < 0){
    console.log("Negative Number")
}
else{
    console.log("Number is Zero")
}