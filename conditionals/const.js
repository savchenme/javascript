const userInput = prompt("Введите любое число:");

const number = Number(userInput);

if (isNaN(number) || userInput === null || userInput.trim() === "") {
    console.log("Нужно вводить только числа!");
} else if (number > 0) {
    console.log("Число положительное");
} else if (number < 0) {
    console.log("Число отрицательное");
} else {
    console.log("Это ноль");
}