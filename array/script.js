//задание 1
const numbers = [5, 6, 7, 8]
const squared = numbers.map(num => num ** 2);

console.log(squared);

//задание 2
const elements = [1, 2, 2, 3, 4, 5, 5, 5, 6, 7, 7];
const unique = elements.filter((item, index) => elements.indexOf(item) === index); 
//Оставляем только те элементы, чей первый встреченный индекс совпадает с текущим
console.log(unique);

//задание 3
const scores = [20, 30, 40];
const sum = scores.reduce((total, num) => total + num, 0); 

console.log(sum);

//задание 4 
const items = [1, 2, 3, 4];
//Складываем элементы с конца в новый массив
const reversed = items.reduceRight((acc, current) => {
    acc.push(current);
    return acc;
}, []);

console.log(reversed);

//задание 5
let x = 5;
x = 6;
console.log(x); //let используется для объявления переменных, которые могут быть перезаписаны
/*однако в js повторное объявление переменных в одной области видимости могут привести к ошибке*/
const y = 4;
// y = 7; /* выйдет ошибка, если раскомментировать строку*/
console.log(y); //const используется для объявления констант, которые не могут быть перезаписаны

let fruits = ['Dragonfruit', 'Pineapple', 'Kiwi'];
fruits = ['Banana', 'Apple', 'Peach']; /*поскольку новое значение массива было объявлено через let, 
благодаря js бразуер не увидит ошибки и разрешит вывести в консоль массив с новым значением*/
fruits.pop();
fruits.push('Mango');
console.log(fruits);

const berries = ['Strawberry', 'Blackberry', 'Raspberry'];
berries.pop(); // удалит последний элемент
berries.push('Blueberry'); // berries = ['Новый', 'Массив']; // Если раскомментировать, будет ошибка.
//нельзя перезаписать константу у массива без использования push/pop/reduce/splice
console.log(berries);

//но можно заменить значение у выбранного индекса в массиве [0]
const wildberries = ['Raspberry', 'Blackberry', 'Srawberry'];
wildberries.splice(1,3); //удаляем два выбранных элемента, начиная с индекса 1
wildberries.push('Blueberry');
console.log(wildberries);

