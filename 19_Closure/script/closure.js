let first = 108;

let outer = (outerArg) => {
  const outerConst = 3.14;

  let inner = (innerArg) => {
    const innerConst = 6.28;
    console.log(`first: ${first}`);
    console.log(`outerArg: ${outerArg}`);
    console.log(`outerConst: ${outerConst}`);
    console.log(`innerArg: ${innerArg}`);
    console.log(`innerConst: ${innerConst}`);
  };

  console.log(`outer first: ${first}`);
  console.log(`outer outerArg: ${outerArg}`);
  console.log(`outer outerConst: ${outerConst}`);
  return inner;
};

// outer(188)(288);

let createCounter = () => {
    let count = 0;

    return () => ++count;
}

let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

let counter2 = createCounter();
console.log(counter2());
console.log(counter2());
console.log(counter2());