//задание 1
function average(...numbers) {
  if (numbers.length === 0) { //условие проверяет, переданы ли аргументы
     return 0; // если ничего не передано, функция возвращает 0, чтобы не делить 0 на 0 и не получать NaN
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

console.log(average(2, 3, 4));     
console.log(average(10, 20, 30));   
console.log(average());

//задание 2
function printUser({ name, age, country }) {
  return `Name: ${name}, Age: ${age}, Country: ${country}`; 
} //console.log переносим вниз и на это место ставим return для вывода строки

const user = { name: 'Jaylin', age: 24, country: 'Russia' };
console.log(printUser(user));

//задание 3
//1. Создаём простой объект с вложенным объектом внутри
const client = {
  name: 'Галина',
  age: 24,
  address: {
    city: 'Саратов',
    street: 'Радищева'
  },
  hobbies: ['чтение', 'ин.яз', 'фотографии'] //2. добавляем массив
};

const { name, address: { city }, hobbies: [firstHobby] } = client; 
//3. Извлекаем имя с верхнего уровня, город из объекта и первое по счёту хобби из массива 
console.log(name); 
console.log(city);
console.log(firstHobby);

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





