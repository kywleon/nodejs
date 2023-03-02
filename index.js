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

// const fs = require('node:fs');

// const zlib = require('node:zlib');

// const gzip = zlib.createGzip();

// const readableStream = fs.createReadStream('./file.txt' , {
//     encoding: "utf-8",
//     highWaterMark: 2,
// });

// readableStream.pipe(gzip).pipe(fs.WriteStream('./file2.txt.gz'))

// const writeableStream = fs.createWriteStream("./file2.txt");

// readableStream.pipe(writeableStream);


// readableStream.on('data' , (chunk) => {
//     console.log(chunk);
//     writeableStream.write(chunk);
// })

/* ------------------------------------------------------- */
/* Tutorial - Creating a Node Server - 31,32,33,34  */

// const http = require('node:http');
// const fs = require('node:fs');

// /* This code for response any incoming request */
// const server = http.createServer((req ,res) => {

//     const superHero = {
//         firstName: "Bruce",
//         lastName: "Wayne",
//     };

//     const name = 'Vishwas';

//     /* Way 1 */
//     let html = fs.readFileSync('./index.php', 'utf-8');
//     html = html.replace("{{name}}", name)
//     res.writeHead(200, { 'content-Type' : 'text/html'});
//     res.end(html);
//     // res.end(JSON.stringify(superHero));
// });

// /* 3000 port number  */
// server.listen(3000 , () => {
//     console.log("Server running on port 3000");
// })

/* ------------------------------------------------------- */
/* Tutorial - HTTP Routing - 35 */

// const http = require('node:http');
// const fs = require('node:fs');

// /* This code for response any incoming request */
// const server = http.createServer((req ,res) => {

//     //req.method GET POST PUT DELETE
//     const superHero = {
//         firstName: "Bruce",
//         lastName: "Wayne",
//     };

//     if (req.url === "/") {
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.end("Home page");
//     } else if(req.url === "/about"){
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.end("About page");
//     } else if(req.url === "/api"){
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(JSON.stringify(superHero));
//     } else {
//         res.writeHead(404);
//         res.end("Page not Found");
//     }
// });

// /* 3000 port number  */
// server.listen(3000 , () => {
//     console.log("Server running on port 3000");
// })

/* ------------------------------------------------------- */
/* Tutorial - Thread Pool - 39 */
// const fs = require('node:fs');

// console.log("First");

// fs.readFile("./file.txt" , 'utf-8' ,(err, data) => {
//     console.log("File Contents");
// })

// console.log("Last");

// const crypto = require('node:crypto');
// const OS = require('os')

// console.log("CPU cores: ",OS.cpus().length)
// // process.env.UV_THREADPOOL_SIZE = OS.cpus().length
// process.env.UV_THREADPOOL_SIZE = 8;
// //const MAX_CALLS = OS.cpus().length;
// const MAX_CALLS = 16;


// const start = Date.now();
// for (let i = 0; i < MAX_CALLS; i++) {
//   crypto.pbkdf2('password', 'salt', 10000, 512, 'sha512', () => {
//     console.log(`Hash: ${i + 1} `, Date.now() - start);
//   });
// }

// const start = Date.now();
// crypto.pbkdf2Sync("password", 'salt', 100000 , 512 , 'sha512');
// crypto.pbkdf2Sync("password", 'salt', 100000 , 512 , 'sha512');
// crypto.pbkdf2Sync("password", 'salt', 100000 , 512 , 'sha512');
// console.log("Hash: " , Date.now() - start);

/* ------------------------------------------------------- */
/* Tutorial - Network I/O - 41*/

const https = require('node:https');

const MAX_CALLS = 16;

const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
    https.request("https://www.google.com" , (res) => {
        res.on("data" , () => {});
        res.on("end" ,() => {
            console.log(`Request: ${i + 1}`, Date.now() - start);
        });
    })
    .end();
}