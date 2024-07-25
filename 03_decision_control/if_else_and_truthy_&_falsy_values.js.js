// turthy values: values other than falsy values are the truthy values
if(1){
    console.log('truthy')
}
else{
    console.log('falsy')
}

let a = undefined; // falsy values: null, 0, undefined, NaN, false, ""

if(a){
    console.log('truthy')
}
else{
    console.log('falsy')
}