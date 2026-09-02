let heightInput = null; 
let weightInput = null;

while (true) {
    heightInput = prompt("Введите ваш рост в сантиметрах (обязательно):");
    
    // Если нажата "Отмена"
    if (heightInput === null) {
        alert("Отмена невозможна! Пожалуйста, введите данные.");
        continue; 
    }
    
    const numHeight = Number(heightInput);
    if (Number.isFinite(numHeight) && numHeight > 0) {
        break;
    }
    alert("Пожалуйста, введите корректное число для роста (больше 0)");
}

// 2. Цикл для веса (сработает, только если рост был успешно введён)
if (heightInput !== null) {
    while (true) {
        weightInput = prompt("Введите ваш вес в килограммах (обязательно):");
        
        if (weightInput === null) {
            alert("Отмена невозможна! Пожалуйста, введите данные.");
            continue;
        }
        
        const numWeight = Number(weightInput);
        if (Number.isFinite(numWeight) && numWeight > 0) {
            break;
        }
        alert("Пожалуйста, введите корректный вес (число больше 0)");
    }
}

// 3. Расчёт и вывод (только если оба значения введены и не было отмены)
if (heightInput !== null && weightInput !== null) {
    const height = Number(heightInput) / 100;
    const weight = Number(weightInput);
    const bmi = weight / (height * height);

    // Дополнительная страховка: проверяем сам ИМТ на конечность числа
    if (!Number.isFinite(bmi)) {
        alert("Не удалось рассчитать ИМТ из-за неверных данных.");
    } else if (bmi < 18.5) {
        alert(`Ваш ИМТ: ${bmi.toFixed(1)}. Дефицит массы тела`);
    } else if (bmi < 25) {
        alert(`Ваш ИМТ: ${bmi.toFixed(1)}. Нормальный вес`);
    } else if (bmi < 30) {
        alert(`Ваш ИМТ: ${bmi.toFixed(1)}. Избыточный вес`);
    } else {
        alert(`Ваш ИМТ: ${bmi.toFixed(1)}.Ожирение`);
    }
}