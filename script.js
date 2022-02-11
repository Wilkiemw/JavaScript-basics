/*'use strict';

let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log('I can drive :D');

// const interface = 'Audio';

// const private = 534;
*/

/*function logger() {
    console.log('My name is Jonas');
}
*/
// calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');

//Function declaration
/*function calcAge1(birthYear) {
    return 2037 - birthYear;
}
// Function expression
const age1 = calcAge1(1991);
console.log(age1);

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);
*/
// Arrow function
/*const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

/*function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/

/*const calcAge = function (birthYear) {
    return 2037 - birthYear;

}




const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return - 1;
    }


}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

// Fundamentals Part 2 Coding challenge #1

/*

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKolas} vs. ${avgDolphins})`)
    } else {
        console.log("No team wins...");
    }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
/*scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

/* Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter']
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Jonas';
const jonas = [firstName, 'Shmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

//Exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);
*/

// Array Methods
// add elements
/*
const friends = ['Michael', 'Steven', 'Peter']
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

// Includes

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}
*/

// Coding Challange #2

/*const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2],];
console.log(totals);
*/

/*const jonasArry = ['Jonas',
   'Schmedtmann',
   2037 - 1991,
  'teacher',
  'Michael',
  'Peter',
  'Steven'
];
*/
//Object literal syntex
/*const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
*/
/*const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, LastName, age, job, and friends');
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request !What do you want to know about Jonas? Choose between firstName, LastName, age, job, and friends')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

//Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`);

jonas.friends = '3';
jonas['best friend'] = 'Michael';
*/

/*const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicence: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }
    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }



    calcAge: function () {
        this.age = 2037 - this.birthYear;
        // console.log(this);
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} -year old ${jonas.job}, and he has ${this.hasDriversLicence ? 'a' : 'no'} drivers licence.`
    }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a drivers licence"
console.log(jonas.getSummary());
*/

// /Coding challenge #3

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;


// OBJECT MARK =
/*const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
console.log(mark)
// OBJECT JOHN SMITH
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)

} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}
*/

// console.log('Lifting weights repetition 1  🏋️');
// console.log('Lifting weights repetition 2  🏋️');
// console.log('Lifting weights repetition 3  🏋️');
// console.log('Lifting weights repetition 4  🏋️');
// console.log('Lifting weights repetition 5  🏋️');
// console.log('Lifting weights repetition 6  🏋️');
// console.log('Lifting weights repetition 7  🏋️');
// console.log('Lifting weights repetition 8  🏋️');
// console.log('Lifting weights repetition 9  🏋️');
// console.log('Lifting weights repetition 10 🏋️');

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 30; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️`);
// }
/*
const jonas = ['Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];
*/
// console.log(jonas[0])
// console.log(jonas[1])
// ...jonasArry
// console.log(jonas[4])
// jonas [5] does NOT exist
/*
for (let i = 0; i < jonas.length; i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);
    // Filling types of array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}
// types[0] = 'string'; not needed now
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break ....updated this file....
console.log('---ONLY STRINGS---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log('---BREAK WITH NUMBER---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}
*/
/*
const jonas = ['Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

//0,1, ..., 4
// 4, 3,...,0

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}
*/
// LOOPS and LOOPS within a LOOP
/*
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---------------Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}🏋️‍♂️ `);
    }
}
*/
// WHILE LOOPS

