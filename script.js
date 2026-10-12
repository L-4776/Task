
/* ==========================================================================
   КОМПЛЕКСНЫЙ ПРАКТИКУМ ПО JAVASCRIPT (№1 – №110)
   Исправленная версия: синтаксис, логика и граничные случаи
   ========================================================================== */

console.log("=== НАЧАЛО ВЫПОЛНЕНИЯ ПРАКТИЧЕСКИХ ЗАДАНИЙ ===");

// --------------------------------------------------------------------------
// Уровень: Основы (Задания 1–10)
// --------------------------------------------------------------------------

// Задание 1. Калькулятор двух чисел
let a1 = 15, b1 = 5;
console.log("Задание 1: Сложение =", a1 + b1);
console.log("Задание 1: Вычитание =", a1 - b1);
console.log("Задание 1: Умножение =", a1 * b1);
console.log("Задание 1: Деление =", b1 !== 0 ? a1 / b1 : "Деление на ноль");

// Задание 2. Возраст пользователя
let ageUser = 17;
console.log(
    "Задание 2:",
    Number.isInteger(ageUser) && ageUser >= 0
        ? ageUser >= 18 ? "Доступ разрешён" : "Доступ запрещён"
        : "Некорректный возраст"
);

// Задание 3. Чётное или нечётное
let num3 = 24;
console.log(
    "Задание 3:",
    Number.isInteger(num3)
        ? num3 % 2 === 0 ? "Чётное" : "Нечётное"
        : "Введите целое число"
);

// Задание 4. Система оценивания студентов
let score4 = 85;
if (!Number.isFinite(score4) || score4 < 0 || score4 > 100) {
    console.log("Задание 4: Ошибка");
} else if (score4 >= 90) {
    console.log("Задание 4: Отлично");
} else if (score4 >= 70) {
    console.log("Задание 4: Хорошо");
} else if (score4 >= 50) {
    console.log("Задание 4: Удовлетворительно");
} else {
    console.log("Задание 4: Не сдал");
}

// Задание 5. Умный светофор
let color5 = "green";
if (color5 === "red") console.log("Задание 5: Стой");
else if (color5 === "yellow") console.log("Задание 5: Подожди");
else if (color5 === "green") console.log("Задание 5: Можно идти");
else console.log("Задание 5: Неизвестный сигнал");

// Задание 6. Проверка возраста
let age6 = 16;
if (!Number.isInteger(age6) || age6 < 0) {
    console.log("Задание 6: Некорректный возраст");
} else if (age6 >= 18) {
    console.log("Задание 6: Совершеннолетний");
} else {
    console.log("Задание 6: Несовершеннолетний");
}

// Задание 7. Банкомат
let balance7 = 50000, withdraw7 = 20000;
if (!Number.isFinite(balance7) || balance7 < 0 ||
    !Number.isFinite(withdraw7)) {
    console.log("Задание 7: Некорректные данные");
} else if (withdraw7 <= 0) {
    console.log("Задание 7: Некорректная сумма");
} else if (withdraw7 > balance7) {
    console.log("Задание 7: Недостаточно средств");
} else {
    console.log("Задание 7: Баланс после снятия =", balance7 - withdraw7);
}

// Задание 8. Интернет-магазин
let total8 = 35000;
if (!Number.isFinite(total8) || total8 < 0) {
    console.log("Задание 8: Некорректная сумма");
} else {
    let disc8 = total8 >= 50000 ? 0.15
        : total8 >= 30000 ? 0.10
        : total8 >= 10000 ? 0.05
        : 0;

    console.log(
        "Задание 8: Итоговая сумма с учетом скидки =",
        total8 * (1 - disc8)
    );
}

// Задание 9. Таблица умножения
console.log("Задание 9: Таблица умножения на 7");
for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}

// Задание 10. Проверка пароля
function checkPassword10(pwd) {
    if (typeof pwd !== "string") return "Пароль должен быть строкой";
    if (pwd.length < 8) return "Слишком короткий пароль";
    if (!/\d/.test(pwd)) return "Добавьте цифру";
    return "Пароль принят";
}
console.log("Задание 10:", checkPassword10("password123"));


// --------------------------------------------------------------------------
// Дополнительные задания (№11–25)
// --------------------------------------------------------------------------

// Задание 11. Определение температуры
let temp11 = 18;
if (!Number.isFinite(temp11)) console.log("Задание 11: Некорректная температура");
else if (temp11 < 0) console.log("Задание 11: Очень холодно");
else if (temp11 <= 15) console.log("Задание 11: Прохладно");
else if (temp11 <= 25) console.log("Задание 11: Тепло");
else console.log("Задание 11: Жарко");

// Задание 12. Проверка логина
let login12 = "student";
console.log(
    "Задание 12:",
    login12 === "admin" ? "Добро пожаловать!" : "Неверный логин"
);

// Задание 13. Максимальное число
let a13 = 12, b13 = 25, c13 = 18;
console.log("Задание 13: Максимум =", Math.max(a13, b13, c13));

// Задание 14. Стоимость билета
let age14 = 20;
let ticketPrice;

if (!Number.isInteger(age14) || age14 < 0) {
    ticketPrice = "Некорректный возраст";
} else {
    ticketPrice = age14 < 7 ? "Бесплатно"
        : age14 <= 17 ? "500 ₸"
        : age14 <= 59 ? "1 000 ₸"
        : "600 ₸";
}
console.log("Задание 14:", ticketPrice);

// Задание 15. День недели
let day15 = 3;
switch (day15) {
    case 1: console.log("Задание 15: Понедельник"); break;
    case 2: console.log("Задание 15: Вторник"); break;
    case 3: console.log("Задание 15: Среда"); break;
    case 4: console.log("Задание 15: Четверг"); break;
    case 5: console.log("Задание 15: Пятница"); break;
    case 6: console.log("Задание 15: Суббота"); break;
    case 7: console.log("Задание 15: Воскресенье"); break;
    default: console.log("Задание 15: Некорректный номер дня");
}

// Задание 16. Сумма чисел от 1 до 100
let sum16 = 0;
for (let i = 1; i <= 100; i++) sum16 += i;
console.log("Задание 16: Сумма =", sum16);

// Задание 17. Чётные числа
let evenCount17 = 0;
for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0) evenCount17++;
}
console.log("Задание 17: Количество чётных чисел =", evenCount17);

// Задание 18. Средний балл студента
let grades18 = [85, 90, 78, 92, 88];
let avg18 = grades18.length > 0
    ? grades18.reduce((a, b) => a + b, 0) / grades18.length
    : null;
console.log("Задание 18: Средний балл =", avg18 ?? "Нет оценок");

// Задание 19. Поиск самого дорогого товара
let prices19 = [1500, 3500, 2200, 7000, 4100];
console.log(
    "Задание 19: Максимальная цена =",
    prices19.length > 0 ? Math.max(...prices19) : "Нет товаров"
);

// Задание 20. Обратный отсчёт
let count20 = 5;
while (count20 > 0) {
    console.log("Задание 20:", count20);
    count20--;
}
console.log("Задание 20: Обратный отсчёт завершён");

// Задание 21. Электронная очередь
let queue21 = [101, 102, 103];
queue21.forEach(q => console.log(`Задание 21: Приглашается студент №${q}`));

// Задание 22. Проверка доступа в компьютерный кабинет
let role22 = "student", hasPass22 = true;
if (role22 === "teacher" || (role22 === "student" && hasPass22)) {
    console.log("Задание 22: Доступ разрешён");
} else {
    console.log("Задание 22: Доступ запрещён");
}

// Задание 23. Расчёт заработной платы
let salary23 = 200000;
if (!Number.isFinite(salary23) || salary23 < 0) {
    console.log("Задание 23: Некорректная зарплата");
} else {
    let bonus23 = salary23 < 150000 ? salary23 * 0.2
        : salary23 < 300000 ? salary23 * 0.15
        : salary23 * 0.1;
    console.log("Задание 23: Зарплата с премией =", salary23 + bonus23);
}

// Задание 24. Учёт посещаемости
let att24 = [true, true, false, true, false];
let present24 = att24.filter(Boolean).length;
console.log("Задание 24: Присутствует =", present24);

// Задание 25. Мини-банкомат
let balance25 = 100000, pin25 = 1234, amount25 = 25000;
let enteredPin25 = 1234;

if (enteredPin25 !== pin25) {
    console.log("Задание 25: Неверный PIN-код");
} else if (!Number.isFinite(amount25) || amount25 <= 0) {
    console.log("Задание 25: Некорректная сумма");
} else if (amount25 > balance25) {
    console.log("Задание 25: Недостаточно средств");
} else {
    balance25 -= amount25;
    console.log("Задание 25: Новый баланс =", balance25);
}


// --------------------------------------------------------------------------
// Основной блок заданий (№27–65)
// --------------------------------------------------------------------------

// Задание 27. Положительное, отрицательное или ноль
let num27 = -8;
console.log(
    "Задание 27:",
    num27 > 0 ? "Положительное" : num27 < 0 ? "Отрицательное" : "Ноль"
);

// Задание 28. Делимость на 3 и 5
let num28 = 30;
console.log(
    "Задание 28:",
    num28 % 3 === 0 && num28 % 5 === 0 ? "Делится" : "Не делится"
);

// Задание 29. Определение времени суток
let hour29 = 14;
console.log(
    "Задание 29:",
    Number.isInteger(hour29) && hour29 >= 0 && hour29 <= 23
        ? hour29 >= 12 && hour29 <= 17 ? "День" : "Другое время"
        : "Некорректный час"
);

// Задание 30. Проверка экзаменов
let math30 = 75, prog30 = 48;
console.log(
    "Задание 30:",
    math30 >= 50 && prog30 >= 50 ? "Сданы" : "Пересдача"
);

// Задание 31. Проверка високосного года
let year31 = 2028;
let isLeap = Number.isInteger(year31) && year31 > 0 &&
    ((year31 % 400 === 0) ||
    (year31 % 4 === 0 && year31 % 100 !== 0));

console.log(
    "Задание 31:",
    !Number.isInteger(year31) || year31 <= 0
        ? "Некорректный год"
        : isLeap ? "Високосный" : "Обычный"
);

// Задание 32. Сумма нечётных чисел от 1 до 50
let sum32 = 0;
for (let i = 1; i <= 50; i += 2) sum32 += i;
console.log("Задание 32: Сумма нечётных =", sum32);

// Задание 33. Количество цифр числа
let num33 = 45678;
let str33 = String(Math.abs(num33));
console.log(
    "Задание 33: Количество цифр =",
    Number.isSafeInteger(num33) ? str33.length : "Введите целое безопасное число"
);

// Задание 34. Переворот строки
let word34 = "JavaScript";
let rev34 = "";
for (let i = word34.length - 1; i >= 0; i--) rev34 += word34[i];
console.log("Задание 34: Переворот строки =", rev34);

// Задание 35. Количество положительных чисел
let arr35 = [-5, 10, 0, 23, -8, 15, -2];
console.log("Задание 35: Положительных чисел =", arr35.filter(n => n > 0).length);

// Задание 36. Уникальные элементы массива
let arr36 = [2, 3, 2, 5, 3, 7, 5, 9];
console.log("Задание 36: Уникальные =", [...new Set(arr36)]);

// Задание 37. Конвертер температуры
function convertTemp37(c) {
    if (typeof c !== "number" || !Number.isFinite(c)) return null;
    return c * 1.8 + 32;
}
console.log("Задание 37: 20°C в °F =", convertTemp37(20));

// Задание 38. Проверка простого числа
function isPrime38(n) {
    if (!Number.isSafeInteger(n) || n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log("Задание 38: Число 7 простое?", isPrime38(7));

// Задание 39. Подсчёт английских гласных
function countVowels39(txt) {
    if (typeof txt !== "string") return 0;
    return [...txt.toLowerCase()].filter(c => "aeiou".includes(c)).length;
}
console.log("Задание 39: Гласных в 'education' =", countVowels39("education"));

// Задание 40. Расчёт доставки
function calcDel40(amt) {
    if (typeof amt !== "number" || !Number.isFinite(amt) || amt < 0) {
        return null;
    }
    return amt < 5000 ? 1500 : amt < 15000 ? 800 : 0;
}
console.log("Задание 40: Доставка для 10000 ₸ =", calcDel40(10000));

// Задание 41. База студентов
let students41 = [
    { name: "Алия", score: 95 },
    { name: "Мадина", score: 45 }
];
console.log("Задание 41: Студентов в базе =", students41.length);

// Задание 42. Бронирование места
let seats42 = [false, true, false];
if (seats42[0] === false) {
    seats42[0] = true;
    console.log("Задание 42: Первое место забронировано", seats42);
} else {
    console.log("Задание 42: Первое место уже занято", seats42);
}

// Задание 43. Склад товаров
let products43 = [{ name: "Ноутбук", quantity: 5 }];
products43.push({ name: "Принтер", quantity: 2 });
console.log("Задание 43: Товаров на складе =", products43.length);

// Задание 44. Сумма расходов
let expenses44 = [2500, 1800, 4200];
console.log("Задание 44: Сумма расходов =", expenses44.reduce((a, b) => a + b, 0));

// Задание 45. Регистрация участников
let parts45 = [{ name: "Али", age: 17, registered: true }];
console.log(
    "Задание 45: Участников зарегистрировано =",
    parts45.filter(p => p.registered === true).length
);


// --------------------------------------------------------------------------
// Расширенный блок заданий (№66–110)
// --------------------------------------------------------------------------

// Задание 66. Оценка скорости
let speed66 = 25;
console.log(
    "Задание 66:",
    speed66 > 50 ? "Быстрый" : speed66 > 10 ? "Средняя" : "Медленный"
);

// Задание 67. Проверка логина и пароля
let login67 = "admin", pwd67 = "12345";
console.log(
    "Задание 67:",
    login67 === "admin" && pwd67 === "12345"
        ? "Вход выполнен" : "Ошибка"
);

// Задание 68. Часы работы кабинета
let hour68 = 14;
console.log(
    "Задание 68:",
    Number.isInteger(hour68) && hour68 >= 0 && hour68 <= 23
        ? hour68 >= 8 && hour68 < 18 ? "Кабинет работает" : "Закрыт"
        : "Некорректный час"
);

// Задание 69. Температура оборудования
let temp69 = 75;
console.log(
    "Задание 69:",
    temp69 >= 90 ? "Критическая"
        : temp69 >= 70 ? "Высокая"
        : "Нормальная"
);

// Задание 70. Допуск студента
let att70 = 85, avg70 = 70;
console.log(
    "Задание 70:",
    att70 >= 80 && avg70 >= 50 ? "Допущен" : "Не допущен"
);

// Задание 71. Общая стоимость оборудования
let equip71 = [250000, 180000, 320000];
console.log(
    "Задание 71: Общая стоимость оборудования =",
    equip71.reduce((a, b) => a + b, 0)
);

// Задание 72. Минимальный балл
let scores72 = [78, 95, 43, 67];
console.log(
    "Задание 72: Минимальный балл =",
    scores72.length > 0 ? Math.min(...scores72) : "Нет оценок"
);

// Задание 73. Квадрат числа
console.log("Задание 73: Квадрат числа 5 =", 5 ** 2);

// Задание 74. Общее количество студентов
let groups74 = [24, 22, 25, 20];
console.log(
    "Задание 74: Всего студентов =",
    groups74.reduce((a, b) => a + b, 0)
);

// Задание 75. Фильтрация чётных чисел
let nums75 = [12, 7, 18, 5];
console.log("Задание 75: Чётные числа =", nums75.filter(n => n % 2 === 0));

// Задание 76. Стоимость обучения
function calcTuition76(fee, months) {
    if (!Number.isFinite(fee) || fee < 0 ||
        !Number.isInteger(months) || months < 0) {
        return null;
    }
    return fee * months;
}
console.log("Задание 76: Стоимость обучения =", calcTuition76(25000, 8));

// Задание 77. Проверка email
function checkEmail77(email) {
    if (typeof email !== "string") return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
console.log("Задание 77: Email корректен?", checkEmail77("student@gmail.com"));

// Задание 78. Обновление компьютера
let comp78 = { id: 1, working: true, ram: 16 };
comp78.ram = 32;
console.log("Задание 78: Обновленный объем RAM =", comp78.ram);

// Задание 79. Расчёт премии
function calcBonus79(tasks) {
    if (!Number.isInteger(tasks) || tasks < 0) return "Некорректное число задач";
    return tasks >= 15 ? "35 000 ₸"
        : tasks >= 10 ? "20 000 ₸"
        : tasks >= 5 ? "10 000 ₸"
        : "0 ₸";
}
console.log("Задание 79: Премия за 12 задач =", calcBonus79(12));

// Задание 80. Лучший студент
let students80 = [
    { name: "Алия", score: 87 },
    { name: "Мадина", score: 98 }
];
let best80 = students80.length > 0
    ? students80.reduce((prev, curr) =>
        curr.score > prev.score ? curr : prev)
    : null;
console.log("Задание 80: Лучший студент =", best80?.name ?? "Нет студентов");

// Задание 86. Проверка свободного места
let freeSpace86 = 18;
console.log(
    "Задание 86:",
    freeSpace86 >= 100 ? "Много"
        : freeSpace86 >= 20 ? "Достаточно"
        : freeSpace86 >= 5 ? "Мало"
        : "Критически"
);

// Задание 87. Уровень пользователя
let points87 = 350;
console.log(
    "Задание 87:",
    points87 >= 600 ? "Эксперт"
        : points87 >= 300 ? "Продвинутый"
        : points87 >= 100 ? "Пользователь"
        : "Новичок"
);

// Задание 88. Расчёт стоимости парковки
let hours88 = 5;

if (!Number.isFinite(hours88) || hours88 < 0) {
    console.log("Задание 88: Некорректное количество часов");
} else {
    let ceiled88 = Math.ceil(hours88);
    let totalPark88 = ceiled88 === 0
        ? 0
        : ceiled88 > 1
            ? 300 + (ceiled88 - 1) * 200
            : 300;

    console.log(
        "Задание 88: Стоимость парковки =",
        Math.min(2000, totalPark88)
    );
}

// Задание 89. Определение сезона
let month89 = 10;
console.log(
    "Задание 89:",
    !Number.isInteger(month89) || month89 < 1 || month89 > 12
        ? "Некорректный месяц"
        : [12, 1, 2].includes(month89) ? "Зима"
        : [3, 4, 5].includes(month89) ? "Весна"
        : [6, 7, 8].includes(month89) ? "Лето"
        : "Осень"
);

// Задание 90. Температура сервера
let tempServer90 = 65;
console.log(
    "Задание 90:",
    tempServer90 >= 70 ? "Опасный перегрев"
        : tempServer90 >= 40 ? "Повышенная температура"
        : "Норма"
);

// Задание 91. Сумма чисел, кратных 3
let sum91 = 0;
for (let i = 1; i <= 60; i++) {
    if (i % 3 === 0) sum91 += i;
}
console.log("Задание 91: Сумма кратных 3 =", sum91);

// Задание 92. Вторая по величине уникальная оценка
let scores92 = [75, 92, 88, 65, 98, 83];
let uniqSorted92 = [...new Set(scores92)].sort((a, b) => b - a);
console.log(
    "Задание 92: Вторая по величине оценка =",
    uniqSorted92.length >= 2 ? uniqSorted92[1] : "Недостаточно уникальных оценок"
);

// Задание 93. Подсчёт букв 'a'
let text93 = "javascript programming";
console.log(
    "Задание 93: Количество букв 'a' =",
    [...text93].filter(c => c === "a").length
);

// Задание 94. Товары дороже 10000
let prices94 = [5000, 12000, 8000, 25000];
console.log(
    "Задание 94: Товаров дороже 10000 =",
    prices94.filter(p => p > 10000).length
);

// Задание 95. Квадраты чисел от 1 до 15
let squares95 = [];
for (let i = 1; i <= 15; i++) squares95.push(i ** 2);
console.log("Задание 95: Квадраты чисел =", squares95);

// Задание 96. Максимальная оценка
let grades96 = [95, 78, 45, 88, 67, 92];
console.log(
    "Задание 96: Максимальная оценка =",
    grades96.length > 0 ? Math.max(...grades96) : "Нет оценок"
);

// Задание 97. Положительные числа
let numbers97 = [-4, 8, -12, 15, 0, 22];
console.log(
    "Задание 97: Положительные числа =",
    numbers97.filter(n => n > 0)
);

// Задание 98. Возведение в степень
console.log("Задание 98: 2 в степени 3 =", 2 ** 3);

// Задание 99. Расчёт налога
function calculateTax99(price, taxRate) {
    if (!Number.isFinite(price) || price < 0 ||
        !Number.isFinite(taxRate) || taxRate < 0 || taxRate > 100) {
        return null;
    }
    return price * (taxRate / 100);
}
console.log("Задание 99: Сумма налога =", calculateTax99(100000, 12));

// Задание 100. Перевод секунд в часы, минуты и секунды
function convertTime100(seconds) {
    if (!Number.isSafeInteger(seconds) || seconds < 0) {
        return "Введите неотрицательное целое число секунд";
    }

    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = seconds % 60;

    return `${h} ч ${m} мин ${s} сек`;
}
console.log("Задание 100:", convertTime100(3675));

// Задание 101. Стоимость телефонов на складе
let phones101 = [
    { name: "Samsung", price: 280000, stock: 5 },
    { name: "Apple", price: 520000, stock: 3 }
];
let totalStockVal101 = phones101.reduce(
    (acc, p) => acc + p.price * p.stock,
    0
);
console.log(
    "Задание 101: Стоимость всех телефонов на складе =",
    totalStockVal101
);

// Задание 102. Анализ оценок
function analyzeScores102(scoresArr) {
    if (!Array.isArray(scoresArr) || scoresArr.length === 0) {
        return {
            avg: null,
            passed: 0,
            successRate: null,
            message: "Нет оценок для анализа"
        };
    }

    if (!scoresArr.every(
        s => typeof s === "number" && Number.isFinite(s) &&
            s >= 0 && s <= 100
    )) {
        return {
            avg: null,
            passed: 0,
            successRate: null,
            message: "Оценки должны быть числами от 0 до 100"
        };
    }

    let avg = scoresArr.reduce((a, b) => a + b, 0) / scoresArr.length;
    let passed = scoresArr.filter(s => s >= 50).length;

    return {
        avg,
        passed,
        successRate: (passed / scoresArr.length) * 100
    };
}
console.log("Задание 102:", analyzeScores102([75, 45, 90, 60]));

// Задание 103. Генератор ID студента
let idCounter103 = 0;
function generateStudentId103() {
    if (idCounter103 >= Number.MAX_SAFE_INTEGER) {
        throw new Error("Исчерпан диапазон ID");
    }
    idCounter103++;
    return "ST-" + String(idCounter103).padStart(4, "0");
}
console.log("Задание 103: Сгенерированный ID =", generateStudentId103());

// Задание 104. Проверка сложности пароля
function checkPasswordStrength104(pwd) {
    if (typeof pwd !== "string") return "Некорректный пароль";
    if (pwd.length < 8) return "Слабый";

    let hasLetter = /[a-zA-Z]/.test(pwd);
    let hasDigit = /\d/.test(pwd);
    let hasSpecial = /[^a-zA-Z0-9]/.test(pwd);

    if (hasLetter && hasDigit && hasSpecial) return "Сложный";
    if ((hasLetter && hasDigit) ||
        (hasLetter && hasSpecial) ||
        (hasDigit && hasSpecial)) {
        return "Хороший";
    }
    return "Слабый";
}
console.log(
    "Задание 104: Сложность пароля 'P@ssw0rd!' =",
    checkPasswordStrength104("P@ssw0rd!")
);

// Задание 105. Выдача книги
let books105 = [{ id: 1, title: "JavaScript", copies: 5 }];

function issueBook105(id) {
    let book = books105.find(x => x.id === id);

    if (!book) return "Книга не найдена";
    if (!Number.isInteger(book.copies) || book.copies < 0) {
        return "Некорректные данные о количестве книг";
    }
    if (book.copies === 0) return "Нет доступных экземпляров";

    book.copies--;
    return "Книга выдана";
}

console.log("Задание 105:", issueBook105(1));
console.log("Задание 105: Остаток книги JavaScript =", books105[0].copies);

console.log("=== ВСЕ КОНСОЛЬНЫЕ ЗАДАНИЯ УСПЕШНО ВЫПОЛНЕНЫ ===");