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

//* Error handling (extending errors)
// class ValidationError extends Error {
//     constructor(message){
//         super(message);
//         this.name = 'ValidationError';
//     }
// }

// function validate(input){
//     if(!input){
//         throw new ValidationError('Input is required.');
//     }
//     console.log(input);
// }

// try{
//     validate('');
// }
// catch(error){
//     if(error instanceof ValidationError){
//         console.error('Validation Error:', error.message);
//     }
// }

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';

        //* Ensure the stack trace is captured in non-production environments.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

function validate(input) {
    if (input === undefined || input === null) {
        throw new ValidationError('Input cannot be null or undefined.');
    }
    
    if (typeof input !== 'string') {
        throw new ValidationError('Input must be a string.');
    }

    if (input.trim() === '') {
        throw new ValidationError('Input cannot be an empty string.');
    }
    
    console.log('Valid input:', input);
}

try {
    validate(''); //* This will trigger a ValidationError
    // validate(123); 
    // validate('Aryan');
} catch (error) {
    if (error instanceof ValidationError) {
        console.error('Validation Error:', error.message);
        console.error('Stack Trace:', error.stack); //* Log stack trace for debugging
    } else {
        //* Handle unexpected errors
        console.error('Unexpected Error:', error.message);
        console.error('Stack Trace:', error.stack); //* Log stack trace for unexpected errors
    }
}
