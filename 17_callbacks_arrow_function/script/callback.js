function hello(name){
    console.log(`Hello ${name}`);
}

function capitalize(name){
    let upper = name.toUpperCase();
    console.log(upper);
    // console.log(name.toUpperCase());
}

function processUserInput(process){
    let studentName = prompt('Enter your name:');
    process(studentName);
    // process(prompt('Enter your name:'));
}

// processUserInput(hello);
// processUserInput(capitalize)