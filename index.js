// const addFn = require('./add.js');


// console.log("Hello from index.js");


// const sum = addFn(1,3);

// console.log(sum);

// require('./batman');

// require('./superman');

// const superHero = require('./super-hero');
// console.log(superHero.getName());
// superHero.setName("Superman"); 
// console.log(superHero.getName(''));

// const NewSuperHero = require('./super-hero');
// console.log(NewSuperHero.getName());

const SuperHero = require('./super-hero');

const batman = new SuperHero("Batman");

console.log(batman.getName());
batman.setName("Bruce Wayne"); 
console.log(batman.getName());

const superman = new SuperHero('Superman');
console.log(superman.getName());
