/*1st task*/
function isPalindrome(str) {
    // 1. Приводим всё к нижнему регистру, чтобы 'Топот' тоже считался палиндромом
    const cleanStr = str.toLowerCase();

    // 2. Переворачиваем строку:
    // split('') — режет слово на массив букв: ['т', 'о', 'п', 'о', 'т']
    // reverse() — переворачивает массив задом наперед
    // join('')  — склеивает буквы обратно в слово
    const reversedStr = cleanStr.split('').reverse().join('');

    // 3. Сравниваем оригинал и перевёртыш (вернёт true или false)
    return cleanStr === reversedStr;
}

console.log(isPalindrome('Топот')); 
console.log(isPalindrome('Привет')); 

/*2nd task*/
function getShortestWord(sentence) {
  return sentence
    .split(' ')
    .reduce((shortest, current) => current.length < shortest.length ? current : shortest);
}

console.log(getShortestWord('Хохлатые хохотушки хохотом хохотали'));

/*3rd task*/
function createPhoneNumber(string) {
  const part1 = string.slice(0, 3);
  const part2 = string.slice(3, 6);
  const part3 = string.slice(6, 9);

  return `8 (${part1}) ${part2}-${part3}`;
}

console.log(createPhoneNumber('123456789'));

/*4th task*/
function findMinMax(arr) {
  // 1. Берём самый первый элемент массива (индекс 0) как точку отсчёта
  let min = arr[0];
  let max = arr[0];

  // 2. Запускаем цикл по всем элементам массива
  for (let i = 0; i < arr.length; i++) {
    
    // 3. Если текущее число меньше min — обновляем min
    if (arr[i] < min) {
      min = arr[i];
    }
    // 4. Если текущее число больше max — обновляем max
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  // 5. Возвращаем оба найденных числа в виде массива
  return [min, max];
}

console.log(findMinMax([40, 2, 5, 75, 13])); 

/*5th task*/
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(sortArray([25, 17, 23, 56, 32]));