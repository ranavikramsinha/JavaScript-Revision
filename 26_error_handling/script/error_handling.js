let parseStringToJSON = (jsonString) => {
    try{
        return JSON.parse(jsonString);
    }catch(error){
        console.log("Error Occurred.", error.message);
        return {};
        // throw new Error('Error Occurred.');
    }
    finally{ //* finally always runs
        console.log('Finally Executed');
    }
}

let obj = {
    a: 1,
    b: 2,
    c: 3,
}

let objString = JSON.stringify(obj);
let newObj = parseStringToJSON(objString);

console.log(objString);
console.log(newObj);

// let newObj2 = parseStringToJSON('{"a":1,"b":2,"c":3}');
// console.log(newObj2);

let newObj2 = parseStringToJSON('{"a":1;"b":2;"c":3}');
console.log(newObj2);
console.log('End');

//* throw new Error('Error Occurred')
// let newObj2;
// try{
//     newObj2 = parseStringToJSON('{"a":1;"b":2;"c":3}');
// }catch(error){
//     console.log(error.message);
// }
// console.log('End');

function divide(a, b){
    if(b === 0 || b === null){
        throw new Error('Divide by zero');
    }
    return a / b;
}

console.log(divide(6, 3));
console.log(divide(3, 6));
console.log(divide(3, 'a'));

try{
    console.log(divide(3, null));
}
catch(error){
    console.log(error.message);
}
finally{ //* finally always runs
    console.log('Finally Executed');
}