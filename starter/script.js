// let js = 'amazing';

// console.log(40 + 8 + 23 - 10);




// let firstName = "Benish";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let myFirstJob = "Programmer";

// console.log(myFirstJob);

// let country = 'India';
// let continent = 'Asia';
// let population_rank = 2;

// console.log(country);
// console.log(continent);
// console.log(population_rank);


// const now = 2025;
// let jascarAge = now - 2002;
// const annieAge = now - 1996;
// const jeromeAge = now - 1994;

// jascarAge--; // only applicable for the let values  : let jascarAge = now - 2002;
// console.log(jascarAge, annieAge, jeromeAge);
// console.log(jascarAge > annieAge); // boolean = false
// console.log(jascarAge >= 18);

// //average age 

// const averageAge = (jascarAge + annieAge + jeromeAge) / 3;
// console.log("The average age of Jascar, Annie & Jerome is", '', averageAge);


const age = 14;
const isOldEnough = age >= 18;

if (age >= 18) {
    console.log(`You are ${age} so you are allowed to drive`);
} else {
    console.log(`Your age of ${age} which does'nt meets the requirement on driving age of ${isOldEnough}, so you can't drive `);
};

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);



if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!.`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!.`);
};
