console.log('Comparison Operator in JS');

console.log(1 == '1'); //* true
console.log(1 === '1'); //* false

console.log(1 === 1); //* true
console.log(1 === 2); //* false

console.log(1 !== 2); //* true
console.log(1 !== 1); //* false

console.log(1 !== '1'); //* true
console.log(1 != '1'); //* false


let age = 23;

console.log(age > 18); //* true
console.log(age < 18);

console.log(age >= 18); //* true
console.log(age <= 18); //* false


console.log('Program Start')
if(age >= 18){
    console.log('You are an adult')
}
else{
    console.log('You are an minor')
}
console.log('Program Ends')