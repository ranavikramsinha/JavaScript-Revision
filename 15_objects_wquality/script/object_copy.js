let obj1 = {
  a: 33,
  b: 55,
  c: "Hello",
};

console.log('Obj1', obj1);

let obj1ShallowCopy = shallowCopy(obj1);
let obj1DeepCopy = deepCopy(obj1);
console.log('obj1ShallowCopy', obj1ShallowCopy);
console.log('obj1DeepCopy', obj1DeepCopy);


obj1ShallowCopy.a = 111;
obj1ShallowCopy.b = 555;
obj1DeepCopy.b = 777;
console.log('Obj1', obj1);
console.log('obj1ShallowCopy', obj1);
console.log('obj1DeepCopy', obj1DeepCopy);
console.log('Obj1', obj1);


//* NOTE:- ShallowCopyForNestedObject is a valid implementation for creating a shallow copy, while shallowCopy merely returns the original reference without copying

//* shallowCopy Function: It does not actually create a new object but rather returns the same reference, so there's no actual copying happening
function shallowCopy(obj) {
  let obj2 = obj;
  return obj2;
}

function deepCopy(obj){
    let objStr1 = JSON.stringify(obj);
    let obj2 = JSON.parse(objStr1);
    return obj2;
}

let obj2 = {a:{a:1, b:2}, b:3,};
let obj2ShallowCopyForNestedObject = ShallowCopyForNestedObject(obj2);
console.log('obj2ShallowCopyForNestedObject', obj2ShallowCopyForNestedObject);

obj2ShallowCopyForNestedObject.b = 300;
obj2ShallowCopyForNestedObject.a.a = 100;
obj2ShallowCopyForNestedObject.a.b = 700;
console.log('obj2ShallowCopyForNestedObject', obj2ShallowCopyForNestedObject);
console.log('Obj2', obj2);

//* ShallowCopyForNestedObject Function: It creates a new object with the same top-level properties but maintains shared references for nested objects or arrays. This function performs a true shallow copy of the object structure
function ShallowCopyForNestedObject(obj){
    return{...obj}
}
