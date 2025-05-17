'use strict';

const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never create method inside a constructor func
    // this.calcAge = function () {
    //     console.log(2025 - this.birthYear);
    // };
};

const jascar = new Person('Jascar', 2002);
console.log(jascar);

//1. New {} is created
// 2. funcion is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const shiny = new Person('Fedora', 2002);
const rohan = new Person('Rohan', 2003);

console.log(shiny, rohan);


console.log(jascar instanceof Person);

//Prototypes 

console.log(Person.prototype);

Person.prototype.calcAge = function () {
    console.log(2025 - this.birthYear);
};

jascar.calcAge();
rohan.calcAge();

console.log(jascar.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jascar));

console.log(Person.prototype.isPrototypeOf(shiny));

Person.prototype.species = 'Homo Sapiens';
console.log(jascar.species, shiny.species);

console.log(jascar.hasOwnProperty('firstName'));
console.log(jascar.hasOwnProperty('species'));

console.log(jascar.__proto__);
console.log(jascar.__proto__.__proto__);
console.log(jascar.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [2, 2, 3, 4, 4, 6, 8,];
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
    return [...new Set(this)];
}

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);


///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;



// };


// Car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(`${this.name} is going by at ${this.speed} km/h`);

// };

// Car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(`${this.name} is going by at ${this.speed} km/h`);

// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car("Mercedes", 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();




//Class Expressions\
// const PersonCl = class{}


//class decoration
class PersonCl {
    constructor(fullName, bYear) {
        this.fullName = fullName;
        this.bYear = bYear;
    }


    // Methods will be added to .protoype property
    cAge() {
        console.log(2025 - this.bYear);
    }
    greet() {
        console.log(`Hey ${this.fName}`);
    }
    s
    get age() {
        return 2025 - this.bYear;
    }

    set _fullName(name) {
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    //Set a property that already exists
    get _fullName() {
        return this._fullName
    }

    // static method

    static hey() {
        console.log('Hey There!');
        console.log(this);
    };
}

const ben = new PersonCl('Jascar Benish', 2002);
console.log(ben);
ben.cAge();
console.log(ben.age);

console.log(ben.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//     console.log(`Hey ${this.nmae}`);
// };

ben.greet();

// 1. Classed are NOT hoisted
// 2/ Classes are first- class citizens
// 3. Classes are executed in strict mode

const vino = new PersonCl('Vino', 1965);

const account = {
    owner: 'Jascar',
    movements: [200, 500, 120, 320],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    }
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);



//Object.create method

const PersonProto = {
    calcAge() {
        console.log(2025 - this.bY);
    },

    init(fN, bY) {
        this.fN = fN;
        this.bY = bY;
    }

};

const steve = Object.create(PersonProto);
console.log(steve);
steve.name = 'Steve';
steve.birthYear = 2002;
steve.calcAge();


console.log(steve.__proto__ === PersonProto);

const sharon = Object.create(PersonProto);
sharon.init('Sharon', 1994);
sharon.calcAge();


///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class CarCl {

    constructor(make, speed) {
        this.make = make;
        this.speed = speed;

    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.name} is going by at ${this.speed} km/h`);

    };

    brake() {
        this.speed -= 5;
        console.log(`${this.name} is going by at ${this.speed} km/h`);

    };

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }

};

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
















































