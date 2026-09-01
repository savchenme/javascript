const userInput = Number(prompt('Введите число от 1 до 12'));
const monthIndex = userInput - 1; /*js всегда считает месяцы от 0 до 11 
через функцию getMonth(), поэтому в программе вычитаем 1*/

switch (monthIndex) {
    case 0:
        alert('Январь')
        break;
    case 1:
        alert('Февраль')
        break;
    case 2:
        alert('Март')
        break;
    case 3:
        alert('Апрель')
        break;
    case 4:
        alert('Май')
        break;
    case 5:
        alert('Июнь')
        break;
    case 6:
        alert('Июль')
        break;
    case 7:
        alert('Август')
        break;
    case 8:
        alert('Сентябрь')
        break;
    case 9:
        alert('Октябрь')
        break;
    case 10:
        alert('Ноябрь')
        break;
    case 11:
        alert('Декабрь')
        break;
    default:
        alert('Неверное число! Введите от 1 до 12');
        break;
}