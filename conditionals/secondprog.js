let heightInput, weightInput;

// 1. Цикл для роста: крутится, пока ввод пустой, состоит из пробелов или отменён
while (!heightInput || heightInput.trim() === "") {
    heightInput = prompt("Введите ваш рост в сантиметрах (обязательно):");
}

// 2. Цикл для веса: работает точно так же
while (!weightInput || weightInput.trim() === "") {
    weightInput = prompt("Введите ваш вес в килограммах (обязательно):");
}

// 3. Переводим получкнные строки в числа
const height = Number(heightInput) / 100;
const weight = Number(weightInput);
const bmi = weight / (height * height);

// 4. Выводим результат в зависимости от условий
if (bmi < 18.5) {
    alert("Дефицит массы тела");
} else if (bmi < 25) {
    alert("Нормальный вес");
} else if (bmi < 30) {
    alert("Избыточный вес");
} else {
    alert("Ожирение");
}