'use strict';

// // const bookings = [];

// // const createBooking = function (flightnum, numPassengers = 1, price = 199 * numPassengers) {
// //     // numPassengers = numPassengers || 1;
// //     // price = price || 199;


// //     const booking = {
// //         flightnum,
// //         numPassengers,
// //         price
// //     }
// //     console.log(booking);
// //     bookings.push(booking);
// // }

// // createBooking('LH123');
// // createBooking('H123', 2, 800);
// // createBooking('LH123', 2);
// // createBooking('LH125', 5);

// // createBooking('Lh123', 1000);

// const flight = 'LH123'
// const jascar = {
//     name: 'Jascar Benish',
//     passport: 2864839627,

// }

// // const checkIn = function (flightNum, passenger) {
// //     flightNum = 'LH999';
// //     passenger.name = 'Mr. ' + passenger.name;

// //     if (passenger.passport === 2864839627) {
// //         alert('Checked In');
// //     } else {
// //         alert('Wrong Passport!');
// //     }
// // }
// // checkIn(flight, jascar);
// // console.log(flight);
// // console.log(jascar);

// // const newPassport = function (person) {
// //     person.passenger = Math.trunc(Math.random() * 10000000000);
// // };

// // newPassport(jascar);
// // checkIn(flight, jascar);  

// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// };

// // higher - order func

// const transformer = function (str, fn) {
//     console.log(`Original string: ${str}`)
//     console.log(`Transformed string : ${fn(str)}`);

//     console.log(`Transformed by : ${fn.name}`)

// };

// transformer('JavaScript is the best !', upperFirstWord);
// transformer('JavaScript is the best ! ', oneWord);


// //JS callback func
// const high5 = function () {
//     console.log('Hi');
// };
// document.body.addEventListener('click', high5);
// ['Jascar', 'Benish', 'Jeba'].forEach(high5);



// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jascar');
// greeterHey('Benish');

// greet('Hello')('Jascar');

// //arrow func
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);


// call methods 
const airInida = {
    airline: 'AirIndia',
    iataCode: 'AI',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};


airInida.book(238, 'Jascar Benish');
airInida.book(240, 'Shiny Fedora');

const indiGo = {
    airline: 'IndiGo',
    iataCode: 'IG',
    bookings: [],


};




const book = airInida.book;
//book(23, 'Jascar Benish');
book.call(airInida, 23, 'Jascar Benish')
console.log(airInida);

book.call(indiGo, '240', 'Shiny ');
console.log(indiGo);

const spiceJet = {
    airline: 'SpiceJet',
    iataCode: 'SJ',
    bookings: [],
}

book.call(spiceJet, 503, 'Ponsekar');
console.log(spiceJet);

//apply method
const flightData = [583, 'Rohan Joel'];
book.apply(airInida, flightData);
console.log(airInida);

book.call(spiceJet, ...flightData);


//Bind method 
const bookAI = book.bind(airInida);
const bookIG = book.bind(indiGo);
const bookSJ = book.bind(spiceJet);


bookAI(23, 'Jascar Benish');

const bookAI23 = book.bind(airInida, 23);
bookAI23('Jascar');
bookAI23('Vino');

//with Even Listeners

airInida.planes = 300;
airInida.buyPlane = function () {
    console.log(this);
    this.planes++
    console.log(this.planes);
};
airInida.buyPlane();

document
    .querySelector('.buy')
    .addEventListener('click', airInida.buyPlane.bind(airInida));


//partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(23));
console.log(addVAT(100));


// another method
const addTexRate = function (rate) {
    return function (value) {
        return value + value * rate;
    }
}


const VAT2 = addTexRate(0.23);

console.log(VAT2(200));
console.log(VAT2(23));
console.log(VAT2(300));

