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

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;



};


Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.name} is going by at ${this.speed} km/h`);

};

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.name} is going by at ${this.speed} km/h`);

};




const bmw = new Car('BMW', 120);
const mercedes = new Car("Mercedes", 95);


bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
