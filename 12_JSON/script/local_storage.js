console.log('Using Local Storage');
localStorage.setItem('name', 'Aryan');

let user1 = {
    firstName: 'Aryan',
    lastName: 'Sinha',
    age: '23',
    email: 'aryansinha@gmail.com',
    hobbies: ['coding', 'singer'],
};

localStorage.setItem('user1Info', JSON.stringify(user1));

let user1InfoString = localStorage.getItem('user1Info');
console.log(user1InfoString);
console.log(typeof user1InfoString);

let user1Info = JSON.parse(user1InfoString);
console.log(user1Info);