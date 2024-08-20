console.log('Events');

let clickHandler = () => {
    console.log('Button Clicked');
}

let buttonClickHandler = () => {
    for(let i = 0; i < 5; i++){
        console.log(i);
    }
}

let button = document.getElementById('myButton');

//* Method Event Handler (using onclick)
// button.onclick = clickHandler;
// button.onclick = buttonClickHandler;

//* Using Event Listener
button.addEventListener('click', clickHandler);
button.addEventListener('click', clickHandler);
button.addEventListener('click', buttonClickHandler);
button.removeEventListener('click', buttonClickHandler);