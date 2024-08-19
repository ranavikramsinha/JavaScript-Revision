(() => {
    let counter = 0;
    let increment = (head) => console.log(head, ++counter);

    console.log('Start');
    increment('First');

    let timerId = setTimeout(() => increment('timer'), 5000);
    console.log('timerId', timerId);
    setTimeout(() => clearTimeout(timerId), 1000);
    // setTimeout(() => clearTimeout(timerId), 6000);


    let intervalId = setInterval(() => increment('interval'), 1000);
    setTimeout(() => clearInterval(intervalId), 5000);

    console.log('End');
})();