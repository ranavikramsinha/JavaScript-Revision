function greeting(){
    console.log('Hello Rana!');
}
greeting();

function getRandomOption(){
    let randomOption = Math.floor(Math.random() * 10);
    console.log(randomOption);
    return randomOption;
}

let myNumber = getRandomOption();

console.log(`Random number between 0 and 9 is: ${myNumber}`)