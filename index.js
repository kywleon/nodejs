// const addFn = require('./add.js');


// console.log("Hello from index.js");


// const sum = addFn(1,3);

// console.log(sum);

// Learn the module caching
// require('./batman');

// require('./superman');

// const superHero = require('./super-hero');
// console.log(superHero.getName());
// superHero.setName("Superman"); 
// console.log(superHero.getName(''));

// const NewSuperHero = require('./super-hero');
// console.log(NewSuperHero.getName());

// const SuperHero = require('./super-hero');

// const batman = new SuperHero("Batman");

// console.log(batman.getName());
// batman.setName("Bruce Wayne"); 
// console.log(batman.getName());

// const superman = new SuperHero('Superman');
// console.log(superman.getName());

//Math
// const math = require('./math');

// const { add , substract } = math ;

// console.log(add(2,3));
// console.log(substract(2,3));

//JSon

// const data = require("./data.json");

// console.log(data.name);

// run watch - 18 tutorial
// console.log("Hello Sok Hsia");


// Learn node build in module
// const path = require('node:path');

// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.parse(__filename));
// console.log(path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute('./data.json'));

// console.log(path.join('folder1', 'folder2', 'index.html'));
// console.log(path.join('/folder1', 'folder2', 'index.html'));
// console.log(path.join('/folder1', '//folder2', 'index.html'));
// console.log(path.join('/folder1', '//folder2', '../index.html'));
// console.log(path.join(__dirname, 'data.json'));

// console.log(path.resolve('folder1', 'folder2', 'index.html'));
// console.log(path.resolve('/folder1', 'folder2', 'index.html'));
// console.log(path.resolve('/folder1', '//folder2', 'index.html'));
// console.log(path.resolve('/folder1', '//folder2', '../index.html'));
// console.log(path.resolve(__dirname, 'data.json'));


// Learn callback function
// function greet(name){
//     console.log(`Hello ${name}`);
// }

// function higherOrderFunction(callback){
//     const name = "Vishwas";
//     callback(name);
// }

// higherOrderFunction(greet);

//Event Module - 21
// const EventEmitter = require("node:events");

// const emitter = new EventEmitter();

// emitter.on("order-pizza" , (size,topping) => {
//     console.log(`Order received! Baking a ${size} pizza with ${topping}`);
// });

// emitter.on("order-pizza", (size) => {
//     if(size === "large"){
//         console.log("Serving complimentary drink");
//     }else{
//         console.log('Not this option');
//     }
// });

// console.log('Do work before event occurs in the system');

// emitter.emit('order-pizza','large','mushroom');

/*-------------------------------------------------------*/

//Extending from EventEmitter 22

// const PizzaShop = require('./pizza-shop');
// const DrinkMachine = require('./drink-machine');

// const pizzaShop = new PizzaShop();
// const drinkMachine = new DrinkMachine();
 
// pizzaShop.on('order',(size,topping) => {
//     console.log(`Order received! Baking a ${size} pizza with ${topping}`);
//     drinkMachine.serveDrink(size)
// });
// console.log('babi');

// pizzaShop.order('large','mushrooms');
// pizzaShop.displayOrderNumber();

/*-------------------------------------------------------*/

/* buffer - 24 */
// const buffer = new Buffer.from("Vishwas");

// buffer.write("Code");

// console.log(buffer.toString());
// console.log(buffer);
// console.log(buffer.toJSON());

/* ------------------------------------------------------- */

/* Tutorial fs module - */

// const fs = require('node:fs');

// console.log('First');
// const fileContents = fs.readFileSync('./file.txt' , 'utf-8');
// console.log(fileContents);

// console.log('Second');
// /* this function receive two parameter is error and data */
// fs.readFile('./file.txt', 'utf-8' , (error , data) => {
//     if(error){
//         console.log(error + ' error');
//     } else {
//         console.log(data + ' data');
//     }
// });

// console.log('Third');

// fs.writeFileSync('./greet.txt' , "Hello world!");

// fs.writeFile('./greet.txt' , " Hello Vishwas!" , { flag: 'a' } , (err) => {
//      if (err) {
//         console.log(err);
//      } else {
//         console.log("File written");
//      }
// });

/* ------------------------------------------------------- */
/* Tutorial fs promise module - */
// const fs = require('node:fs/promises');

// console.log('First');

// fs.readFile('./file.txt','utf-8')
// .then(data => console.log(data))
// .catch((error) => console.log(error));

// console.log("Second");

// async function readFile() {
//     try {
//         const data = await fs.readFile('file.txt','utf-8');
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// readFile();

/* ------------------------------------------------------- */
/* Tutorial Streams - 28  */

const fs = require('node:fs');

const zlib = require('node:zlib');

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream('./file.txt' , {
    encoding: "utf-8",
    highWaterMark: 2,
});

readableStream.pipe(gzip).pipe(fs.WriteStream('./file2.txt.gz'))

const writeableStream = fs.createWriteStream("./file2.txt");

readableStream.pipe(writeableStream);


// readableStream.on('data' , (chunk) => {
//     console.log(chunk);
//     writeableStream.write(chunk);
// })