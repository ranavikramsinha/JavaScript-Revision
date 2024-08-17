let even = [2, 4, 6, 8, 10];
let [first, second, ...othersEven] = even;
console.log('First:', first);
console.log('Second:', second);
console.log('Other Even:', othersEven);
console.log('Other Even:', ...othersEven);

let {a, b, ...rest} = {a: 1, b: 2, c: 3, d: 4};
console.log(a);
console.log(b);
console.log(rest);
console.log(rest.c);
console.log(rest.d);

function sum(...numbers){
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5));