const outer = document.querySelector('.outer');
const inner = document.querySelector('.inner');

// outer.addEventListener('click', () => {
//     console.log('outer div clicked(bubbling)');
// });

// inner.addEventListener('click', () => {
//     console.log('inner button clicked');
// });

//* clicking the Click Me button will log:

//* inner button clicked
//* outer div clicked(bubbling)

// outer.addEventListener('click', () => {
//     console.log('outer div clicked(bubbling)');
// });

// inner.addEventListener('click', (event) => {
//     console.log('inner button clicked');
//     event.stopPropagation();

// });

//* used event.stopPropagation() & than clicking the Click Me button will log:

//* inner button clicked

outer.addEventListener('click', () => {
    console.log('outer div clicked(capturing)');
}, true);

inner.addEventListener('click', () => {
    console.log('inner button clicked');
});

//* used capturing & than clicking the Click Me button will log:

//* outer div clicked(capturing
//* inner button clicked