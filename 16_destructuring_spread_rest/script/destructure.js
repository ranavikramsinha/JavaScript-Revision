let student1 = {
    firstName: 'Aryan',
    lastName: 'Sinha',
    age: 23,
    address: {
        houseNo: 7,
        road: 'MG Road',
        city: 'Bangalore',
        state: 'Karnataka'
    },
    subjects: ['Maths', 'Science', 'English'],
    feesPaid: true,

}

function printName(student){
    // let firstName = student.firstName;
    // let lastName = student.lastName;

    let {firstName, lastName} = student;
    console.log(`Name: ${firstName} ${lastName}`);

    let result = {firstName: firstName, lastName: lastName};
    return result;
}

printName(student1);
console.log(printName(student1));