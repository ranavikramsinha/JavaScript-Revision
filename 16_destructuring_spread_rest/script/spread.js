let even = [2, 4, 6, 8, 10];
console.log(even);

let newEven = [...even];
newEven.push(12);
console.log('even', even);

console.log('newEven', newEven);
console.log(even.length);
console.log(newEven.length);

let obj = {
    a: 33,
    b: 77,
    c:{
        name: 'Aryan',
        e: 35,
        f: 79,
    },
}

let newObj = {...obj};
console.log('obj', JSON.stringify(obj));
console.log('newObj', JSON.stringify(newObj));

newObj.a = 111;
newObj.c.e = 777;
newObj.c.name = 'Rana';
console.log('obj', JSON.stringify(obj));
console.log('newObj', JSON.stringify(newObj));