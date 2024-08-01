function trySwap(x, y){
    temp = x;
    x = y;
    y = temp;
    console.log(`x:${x}, y:${y}`);
}

let x = 5, y = 2;
console.log(`x:${x}, y:${y}`);
trySwap(x, y);
console.log(`x:${x}, y:${y}`);