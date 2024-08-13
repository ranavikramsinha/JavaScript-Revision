console.log('Different methods of Array');
let arr1 = [34, 54, 76, 66, 98, 22];
let obj1 = {};
console.log('isArray:', Array.isArray(arr1));
console.log('isArray:', Array.isArray(obj1));

console.log('Array 1:', arr1);
arr1.push(111);
console.log('Array 1:', arr1);

arr1.sort((a, b) => a - b);
console.log('Sorted Array 1:', arr1);

const firstGreaterThanThree = arr1.find((num) => num > 76);
console.log("First number greater than 76:", firstGreaterThanThree);

const index = arr1.indexOf(111);
console.log('Index of 111 is:', index);

arr1.forEach(function(arr){
    console.log(arr);
});

//* break & continue don't work in forEach loop but for continue use return

// arr1.forEach(function(arr, i){
//     if(i == 5){
//        return;
//     }
//     console.log(arr, i);
// });

let newArr1 = arr1.map(function(item){
    console.log('map:', item);
    return item * item;
});

// let newArr1 = arr1.map((num) => num * num);

let newArr1Filter = newArr1.filter(function(item){
    return item % 3 === 0;
})

// let newArr1Filter = newArr1.filter((num) => num % 3 === 0);

console.log('map:', arr1);
console.log('map:', newArr1);
console.log('filter', newArr1Filter);