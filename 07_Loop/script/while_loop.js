console.log(`Loop Starts`);

let num = 1; //* initialization

while(num <= 5){ //* condition
    console.log(`Number:${num}`)
    num++; //* update
};

console.log(`Loop Ends`);

function printMultiplicationTable(num){
    let i = 1;

    while(i < 11){
        console.log(`${num} X ${i} = ${num * i}`);
        i++;
    }
}

//* let num2 = prompt('Enter the number for which table has to be generated:')
let num2 = 8;
printMultiplicationTable(num2);

function getFactorial(num){
    let j = 1;
    let result = 1;

    while(j <= num){
        console.log(`${j}! = ${result *= j}`);
        j++
    }
}

let num3 = 10;
getFactorial(num3);