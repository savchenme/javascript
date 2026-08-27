let text = "Galina";
console.log (typeof text); //строка

let age = 24;
console.log (typeof age); //число

let isTrue = true;
console.log (typeof isTrue); //true

let person = {firstName:"Galina", lastName:"Surkova", age:24};
person = undefined;
console.log (typeof person); //undefined

let person1 = {firstName:"Galina", lastName:"Surkova", age:24};
person1 = null; 
console.log (typeof person1); //object

/*Примитивные значения (number, boolean, string, null, undefined) хранятся в переменной как есть, 
а объекты, массивы и функции — по ссылке на место в памяти*/
let x = 2;
let  y = 1;
x = y;
y = 100;
console.log(x); //1 (даже когда 'y' присвоили 100, 'x' всё ещё равняется 1)

/*Ссылочные типы ссылаются на место в памяти, где хранится объект */
let point1 = { x: 1, y: 1 };
let point2 = point1;
point1.y = 100;

console.log(point2.y); /*100 (point1 и point2 ссылаются на одно и то же 
место в памяти, где хранится объект) */

let user = { name: 'Анна', age: 21 }
const admin = user
// Переопределение никак не повлияет на admin, потому что создан новый объект
user = { name: 'Иван' }
console.log(admin) // { name: 'Анна', age: 21 }

admin.isAdmin = true
console.log(user) // { name: 'Иван' }
console.log(admin) // { name: 'Анна', age: 21, isAdmin: true }
