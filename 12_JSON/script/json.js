let user1 = {
    firstName: 'Aryan',
    lastName: 'Sinha',
    age: '23',
    email: 'aryansinha@gmail.com',
    hobbies: ['coding', 'singer'],
};
console.log(user1);

let  user1JSON = JSON.stringify(user1);
console.log(user1JSON);
console.log(typeof user1JSON);

let user1Object = JSON.parse(user1JSON);
console.log(user1Object);
console.log(user1Object["firstName"]);
console.log(user1Object.age);
console.log(user1Object.hobbies.join(', '));

let mystr = '{"firstName":"Aryan","lastName":"Sinha","age":"23","rollNo":"21","email":"aryansinha@gmail.com","hobbies":["coding","singer"]}';
let newUser = JSON.parse(mystr);
console.log(newUser);
console.log(newUser["rollNo"]);