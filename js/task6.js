let sum = 0;
while (true) {
    let input = prompt("Введите число", "");
    if (input === null) { // Пользователь нажал отмену
        break;
    }
    let num = Number(input); // Преобразуем введенное значение в число
    if (isNaN(num)) { // Если введено не число, пропускаем итерацию
        continue;
    }
    sum += num;
}
alert("Сумма введенных чисел: " + sum);

