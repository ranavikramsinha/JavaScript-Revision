let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let container = document.getElementById('container');
let resetButton = document.getElementById('resetButton');

// container.addEventListener('click', function(){
//     console.log(this.id);
// })

//* Interesting
// container.addEventListener('click', (event) => console.log(event.target.id));


// button1.addEventListener('click', function(){
//     console.log(this.id);
// });

// button1.addEventListener('click', function(event){
//     console.log(this.id);
//     event.stopPropagation();
// });

// button1.addEventListener('click', (event) => console.log(event.target.id));

// function handleClick(){
//     console.log(this.id);
//     this.style.color = 'white';
//     this.style.backgroundColor = 'green';
//     this.style.border = '2px solid yellow';
//     this.style.borderRadius = '10px'; 
// }

// container.addEventListener('click', function(event){
//     if(event.target === button1 || event.target === button2 || event.target === button3){
//         handleClick.call(event.target, event);
//     }
// })

// container.addEventListener('click', handleClick);
// button1.addEventListener('click', handleClick);
// button2.addEventListener('click', handleClick);
// button3.addEventListener('click', handleClick);


//* Define the function to apply styles based on the button clicked
function applyButtonStyles(button, bgColor, borderColor) {
    button.style.color = 'white';
    button.style.backgroundColor = bgColor;
    button.style.border = `2px solid ${borderColor}`;
    button.style.borderRadius = '10px';
}

//* Define the handleClick function
function handleClick(event) {
    const target = event.target;

    //* Handle button clicks
    if (target === button1) {
        applyButtonStyles(target, 'green', 'red');
        container.style.backgroundColor = 'cyan';
        [button2, button3].forEach(button => {
            button.style.color = ''; //* Reset text color
            button.style.backgroundColor = ''; //* Reset background color
            button.style.border = ''; //* Reset border
            button.style.borderRadius = ''; //* Reset border radius
        });
    } 
    else if (target === button2) {
        applyButtonStyles(target, 'brown', 'green');
        container.style.backgroundColor = 'blue';
        [button1,button3].forEach(button => {
            button.style.color = ''; //* Reset text color
            button.style.backgroundColor = ''; //* Reset background color
            button.style.border = ''; //* Reset border
            button.style.borderRadius = ''; //* Reset border radius
        });
    } 
    else if (target === button3) {
        applyButtonStyles(target, 'crimson', 'yellow');
        container.style.backgroundColor = 'violet';
        [button1, button2].forEach(button => {
            button.style.color = ''; //* Reset text color
            button.style.backgroundColor = ''; //* Reset background color
            button.style.border = ''; //* Reset border
            button.style.borderRadius = ''; //* Reset border radius
        });
    }
    //* Handle reset button click
    else if (target === resetButton) {
        [button1, button2, button3, resetButton].forEach(button => {
            button.style.color = ''; //* Reset text color
            button.style.backgroundColor = ''; //* Reset background color
            button.style.border = ''; //* Reset border
            button.style.borderRadius = ''; //* Reset border radius
        });
        container.style.backgroundColor = 'black';
    }
}

//* Attach event listeners
container.addEventListener('click', handleClick);
button1.addEventListener('click', handleClick);
button2.addEventListener('click', handleClick);
button3.addEventListener('click', handleClick);
resetButton.addEventListener('click', handleClick);
