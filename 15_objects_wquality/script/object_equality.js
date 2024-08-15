console.log('Object Equality');
let a = {firstName:'Aryan', lastName:'Sinha'};
let b = a;
let c = {firstName:'Aryan', lastName:'Sinha'};
let d = {lastName:'Sinha', firstName:'Aryan'};

//* a and b refer to the same object, so they are equal.
console.log(a == b);
console.log(a === b);
//* a and c refer to different objects, even though their content is identical, so they are not equal.
console.log(a == c);
console.log(a === c);


let student1 = {
    firstName: 'Aryan',
    lastName: 'Sinha',
    age: 23,
    address: {
        houseNo: 7,
        road: 'MG Road',
        city: 'Bangalore',
        state: 'Karnataka'
    },
    subjects: ['Maths', 'Science', 'English'],
    feesPaid: true,
}

// student1.friends = [student1]; //* circular references

// console.log(JSON.stringify(student1));

let student2 = {
    firstName: 'Rana',
    lastName: 'Sinha',
    age: 23,
    address: {
        houseNo: 10,
        road: 'Anumandal Road',
        city: 'Daudnagar',
        state: 'Bihar'
    },
    subjects: ['Maths', 'Science', 'English'],
    feesPaid: true,
}

// console.log(JSON.stringify(student2));

//* For simple objects without circular references, functions, or undefined values, you can use JSON serialization as a quick comparison
function jsonEqual(obj1, obj2){
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log(jsonEqual(student1, student2));

//* For a shallow comparison, you can check if two objects have the same set of properties with identical values. This approach doesn't compare nested objects.
function shallowEqual(obj1, obj2){
    if(typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null){
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if(keys1.length !== keys2.length){
        return false;
    }

    for(let key of keys1){
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }

    return true;
}

console.log(shallowEqual(a, c));

//* For a deep comparison, you need to recursively compare properties that might themselves be objects.
function deepEqual(obj1, obj2){
    if(obj1 === obj2){
        return true;
    }

    if(typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null){
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if(keys1.length !== keys2.length){
        return false;
    }

    for(let key of keys1){
        if(!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])){
            return false;
        }
    }

    return true;
}

console.log(deepEqual(a, c));
console.log(deepEqual(a, d));
console.log(deepEqual(student1, student2));