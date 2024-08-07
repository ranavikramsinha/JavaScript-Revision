function inputPositiveNumber(){
    let num;
    do{
        num = prompt('Enter a positive number');
        console.log(num);
    }while(num < 1);

    return num;
}

let num = inputPositiveNumber();
console.log(`The positive number entered is: ${num}`);