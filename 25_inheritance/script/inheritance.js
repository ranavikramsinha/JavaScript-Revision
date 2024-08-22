class Cat {
    constructor(name){
        this.name = name;
        this.legs = 4;
    }

    move(){
        console.log(`The ${this.name} has ${this.legs} legs.`);
    }

    speak(){
        console.log(`${this.name} makes a noise.`);
    }
}

let leon = new Cat("Leon");
leon.move();
leon.speak();

class Lion extends Cat {
    constructor(name, teeth){
        super(name);
        this.teeth = teeth;
    }

    eat(){
        console.log(`${this.name} eats meat.`)
    }

    speak(){
        console.log(`${this.name} roars.`)
    }

    tooth(){
        console.log(`${this.name} has ${this.teeth} teeth.`)
    }
}

let simba = new Lion("Simba", "long");
simba.move();
simba.speak();
simba.eat();
simba.tooth();

