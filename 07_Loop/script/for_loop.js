for(let i = 0; i < 10; i++){
    console.log(i);
}

function printMultiplicationTable(num){
    for(let i = 1; i < 11; i++){
        console.log(`${num} X ${i} = ${num * i}`);
    }
}

printMultiplicationTable(9);

function getFactorial(num){
    let result = 1;
    for(let i = 1; i <= num; i++){
        console.log(`${i}! = ${result *= i}`);
    }
}

getFactorial(5);

function reverseTheDigit(num){
    let result = 0;

    for(; num > 0;){
        let rem = num % 10;
        console.log(rem, num);
        result = result * 10 + rem;
        num = Math.floor(num/10);
    }

    return result;
}

console.log(reverseTheDigit(12345));

function primeNumber(num){
    if(num === 0){
        return 'Not a Prime Number';
    }

    for(let i = 2; i < Math.floor(num)/2; i++){
        if(num%i === 0){
            return 'Not a Prime Number';
        }
    }

    return 'Prime Number';
}

console.log(primeNumber(53));

for(let i = 0; ; i++){
    if(i === 5){
        break;
    }

    console.log(i);
}

for(let i = 0; i < 21; i++){
    if(i%2 === 0 || i%5 === 0){
        continue;
    }

    console.log(i);
}