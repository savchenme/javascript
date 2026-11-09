//задание 1
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(2, 3, 4)); 

console.log(sum(10, 20, 30)); 

//задание 2
function printUser({ name, age, country }) {
  console.log(`Name: ${name}, Age: ${age}, Country: ${country}`);
}

const user = { name: 'Jaylin', age: 24, country: 'Russia' };
printUser(user);

//задание 3
//1. Создаём простой объект с вложенным объектом внутри
const client = {
  name: 'Галина',
  age: 24,
  address: {
    city: 'Саратов',
    street: 'Радищева'
  }
};

const { name, address: { city } } = client; //2. Извлекаем имя с верхнего уровня и город из вложенного объекта
console.log(name); 
console.log(city);

//задание 4
const workDays = ['Вторник', 'Среда', 'Четверг']; //1. Исходный массив
const fullWeek = ['Понедельник', ...workDays, 'Пятница', 'Суббота']; //2. Создаём новый массив с помощью spread (...)

console.log(fullWeek);

//задание 5
function removePrice(product) {
  const { price, ...rest } = product; // Вытаскиваем цену, а ОСТАТОК (...rest) сохраняем
  return rest; // Возвращаем этот остаток наружу
}

//Исходный объект
const item = { title: 'ручка', price: 100, color: 'синяя' };
const cleanItem = removePrice(item); // Передаём объект в функцию и получаем результат
console.log(cleanItem);





