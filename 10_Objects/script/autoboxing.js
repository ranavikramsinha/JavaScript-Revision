//* Primitive string
let primitiveString="Hello, World!";
//* JavaScript automatically converts the primitive string to a String object
let length=primitiveString.length;
console.log(`Length of string: ${length}`);

//* Primitive number
let primitiveNumber=42;
//* JavaScript automatically converts the primitive number to a Number object
let fixedNumber=primitiveNumber.toFixed(2);
console.log(`Fixed number: ${fixedNumber}`);

//* Primitive boolean
let primitiveBoolean=true;
//* JavaScript automatically converts the primitive booleanto a Boolean object
let booleanString=primitiveBoolean.toString();
console.log(`Boolean as string: ${booleanString}`);