console.log('Call by Value');
let c = 10;
let d = c;
console.log(`c = ${c} & d = ${d}`);
c = 15;
console.log(`c = ${c} & d = ${d}`);

console.log('Call by Reference');
let x = {myvalue: 10};
let y = x;
let z = {myvalue: 10}; //* creating new object
console.log(`x = ${x.myvalue} & y = ${y.myvalue}`);
x.myvalue = 15;
console.log(`x = ${x.myvalue} & y = ${y.myvalue}`);
y.myvalue = 25;
console.log(`x = ${x.myvalue} & y = ${y.myvalue}`);
console.log(x === y);
console.log(z === y);