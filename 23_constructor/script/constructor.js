// function Student(fullName, age, course, classSection, roll){
//     this.fullName = fullName;
//     this.age = age;
//     this.course = course;
//     this.classSection = classSection;
//     this.roll = roll;
//     this.printName = function() {
//         console.log(this.fullName);
//         console.log(this.age);
//         console.log(this.course);
//         console.log(this.classSection);
//         console.log(this.roll);
//     }
// }

// Student.prototype.className = function(){
//     this.classSection = 'A';
// }

//* Class (ES6 Convention)
class Student {
    constructor(fullName, age, course, classSection, roll) {
        this.fullName = fullName;
        this.age = age;
        this.course = course;
        this.classSection = classSection;
        this.roll = roll;
        this.printName = function () {
            console.log(this.fullName);
            console.log(this.age);
            console.log(this.course);
            console.log(this.classSection);
            console.log(this.roll);
        };
    }
    className() {
        this.classSection = 'A';
    }
}


let student1 = new Student('Rana Vikram Sinha', 23, 'MERN', 'B', 3);
console.log(student1);
student1.printName();


student1.className();
console.log(student1);
student1.printName();