function swaping(a, b){
    console.log(`In Function: Before Swap a = ${a} & b = ${b}`);
    let temp = a;
    a = b;
    b = temp;
    console.log(`In Function: After Swap a = ${a} & b = ${b}`);
}
let x = 10;
let y = 11;
console.log(`Before Swap a = ${x} & b = ${y}`);
swaping(x, y);
console.log(`Before Swap a = ${x} & b = ${y}`);

function swapObjects(p, q){
    console.log(`In Function: Before Swap p = ${p.myValue} & q = ${q.myValue}`);
    let temp = p.myValue;
    p.myValue = q.myValue;
    q.myValue = temp;
    console.log(`In Function: After Swap p = ${p.myValue} & q = ${q.myValue}`);
}

let obj1 = {myValue: 10};
let obj2 = {myValue: 11};
console.log(`Before Swap obj1 = ${obj1.myValue} & obj2 = ${obj2.myValue}`);
swapObjects(obj1, obj2);
console.log(`After Swap obj1 = ${obj1.myValue} & obj2 = ${obj2.myValue}`);