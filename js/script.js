document.addEventListener('DOMContentLoaded', () => {

    // Мінімум 1
    // Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), 
    // підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

    let age = prompt('Enter your age', '');
    if (age > 130) {
        alert(`Are you sure in your age?`);
    }
    else if (age >= 60) {
        alert('You are a pensioner');
    }
    else if (age >= 18) {
        alert('You are an adult');
    }
    else if (age >= 12) {
        alert('You are a teenager');
    }
    else if (age >= 0) {
        alert('You are a child');
    }
    else {
        alert('Chenk if your corect put the age');
    }

    // Мінімум 2
    // Запитай у користувача число від 0 до 9 і виведи йому 
    // спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

    let number = + prompt('Enter a number between 0-9');
    if (number === 0) {
        alert('Your symbol is )');
    }
    else if (number === 1) {
        alert('Your symbol is !');
    }
    else if (number === 2) {
        alert('Your symbol is @');
    }
    else if (number === 3) {
        alert('Your symbol is #');
    }
    else if (number === 4) {
        alert('Your symbol is $');
    }
    else if (number === 5) {
        alert('Your symbol is %');
    }
    else if (number === 6) {
        alert('Your symbol is ^');
    }
    else if (number === 7) {
        alert('Your symbol is &');
    }
    else if (number === 8) {
        alert('Your symbol is *');
    }
    else if (number === 9) {
        alert('Your symbol is (');
    }
    else {
        alert('You make a mistake');
    }

    // Мінімум 3
    // Підрахуй суму всіх чисел в заданому користувачем діапазоні.

    let x = + prompt('Put the start of diapason');
    let y = + prompt('Put the end of diapason');
    let sum = 0;
    while (x <= y) {
        sum += x;
        x++;

    }
    alert(`Sum of number in diapason is ${sum}`);

    // Мінімум 4
    // Запитай у користувача 2 числа і знайди найбільший спільний дільник.

    let numOne = + prompt('Put the first number');
    let numTwo = + prompt('Put the second number');
    let gcd;
    while (numOne != numTwo) {
        if (numOne > numTwo) {
            numOne = numOne - numTwo;
        }
        else {
            numTwo = numTwo - numOne;
        }
    }
    gcd = numOne;
    alert(gcd);

    // Мінімум 5
    // Запитай у користувача число і виведи всі дільники цього числа.

    let num = + prompt('Put your number');
    for (let q = 1; q <= num; q++) {
        if (!(num % q)) {
            alert(`Дільники числа ${num}: ${q}`);
        }
    }

    // Норма 1
    // Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

    let a = + prompt('Введіть пятизначне число', '');
    let rev = 0;
    while (a > rev) {
        rev *= 10;
        rev += a % 10;
        a = Math.trunc(a / 10)
    }

    if (a === rev || a === Math.trunc(rev / 10)) {
        alert("Ваше число паліндром");
    }
    else {
        alert("Ваше число не паліндром");
    };

    // Норма 2
    //     Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
    // від 200 до 300 - знижка буде 3%; 
    // від 300 до 500 - 5%;
    // від 500 і вище - 7%.

    let yourSum = prompt('Введи суму твоєї корзини в грн', '');
    if (yourSum > 0) {
        if (yourSum >= 500) {
            alert('Cума твоєї покупки становить: ' + yourSum * 0.93);
        }
        else if (yourSum >= 300) {
            alert('Cума твоєї покупки становить: ' + yourSum * 0.95);
        }
        else if (yourSum >= 200) {
            alert('Cума твоєї покупки становить: ' + yourSum * 0.97);
        }
        else {
            alert('Сума твоєї корзини не змінна і складає: ' + yourSum);
        }
    }

    // Норма 3
    // Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів.При цьому також порахуй,
    //     скільки з них парних і непарних.Виведи статистику на екран.Враховуй, що достатньо однієї
    // змінної(не 10) для введення чисел користувачем.

    let yourNumber;
    let zero = 0;
    let positiveNum = 0;
    let negativeNum = 0;
    let evenNumber = 0;
    let oddNumber = 0;
    for (let h = 0; h < 10; h++) {
        yourNumber = +prompt('Введіть число');

        if (yourNumber === 0) {
            zero++;
        } else if (yourNumber > 0) {
            positiveNum++;
        } else if (yourNumber < 0) {
            negativeNum++;
        }
        if (yourNumber % 2) {
            oddNumber++;
        } else if (yourNumber != 0 && yourNumber % 2 == 0) {
            evenNumber++;
        }
    }
    alert(`Ми порахували ваші числа і у нас вийшло: нулів: ${zero}, додатніх чисел: ${positiveNum}, відємних чисел: ${negativeNum}, непарних чисел: ${oddNumber}, парних чисел: ${evenNumber}`);

    // Норма 4
    // Зацикли відображення днів тижня таким чином: «День тижня. 
    // Хочеш побачити наступний день ? » і так до тих пір, поки користувач натискає OK.

    let showDay;
    let j = 0;
    let nextDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    while (showDay = confirm(` ${nextDay[j]}. Do you want to see the next day? `)) {
        if (j < 6) {
            j++;
        } else if (j = 6) {
            j = 0;
        }
    }

    // Максимум 1

    // Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: 
    // кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, 
    // <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, 
    // поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. 
    // І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").

    let n = +prompt(`Введіть число від 0 до 100`);
    let l = 50;
    if (isNaN(n) || 0 > n || n > 100) {
        alert('Помилка вводу');
    } else if (n === 0) {
        alert(`Ваше число: 0`);
    } else if (n === 100) {
        alert(`Ваше число: 100`);
    } else {
        while (l > 0) {
            if (confirm(`Ваше число: ${l}?`)) {
                if (n === l) {
                    alert(`Вірно, це ${l}`);
                    break;
                } else {
                    alert('Упс, щось пішло не так!');
                    break;
                }
            } else {
                if (confirm(`Ваше число більше за ${l}?`)) {
                    l = Math.ceil(l * 1.1);
                    console.log(l);
                } else {
                    l = Math.ceil(l / 2);
                    console.log(l);
                }
            }
        }
    }

    // Максимум 2
    // Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.

    for (let p = 2; p <= 9; p++) {
        for (r = 1; r <= 10; r++) {
            let res = p * r;
            console.log(`${p} * ${r} = ${res}`);
        };
    }

    // Максимум 3
    // Запитай дату (день, місяць, рік) і виведи наступну за нею дату. 
    // Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.

    let day = +prompt(`Введіть день`);
    let month = +prompt(`Введіть місяць`);
    let year = +prompt(`Введіть рік`);
    alert(`Введена дата: ${day}.${month}.${year}`);
    if (day >= 1 && day <= 31 && month >= 0 && month <= 12 && month != 2) {
        if (day == 31 && month == 12) {
            year += 1;
            month = 1;
            day = 1;
            alert(`Наступна дата: ${day}.${month}.${year}`);
        } else if (day == 31 && (month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)) {
            month += 1;
            day = 1;
            alert(`Наступна дата: ${day}.${month}.${year}`);
        } else if (day <= 30 && (month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)) {
            day += 1;
            alert(`Наступна дата: ${day}.${month}.${year}`);
        } else if (day == 30 && (month == 4 || month == 6 || month == 9 || month == 11)) {
            month += 1;
            day = 1;
            alert(`Наступна дата: ${day}.${month}.${year}`);
        } else if ((day <= 29) && (month == 4 || month == 6 || month == 9 || month == 11)) {
            day += 1;
            alert(`Наступна дата: ${day}.${month}.${year}`);
        } else {
            alert('Невірно введена дата');
        }
    } else if (day >= 1 && day <= 28 && month == 2 && (((year % 100 == 0) && (year % 400 != 0)) || year % 4 != 0)) {
        if ((day == 28) && month == 2) {
            month += 1;
            day = 1;
            alert(`Наступна дата: ${day}.${month}.${year}`);
        } else if (day < 28 && day != 29 && day != 30 && day != 31 && month == 2) {
            day += 1;
            alert(`Наступна дата: ${day}.${month}.${year}`);
        } else {
            alert('Невірно введена дата');
        }
    } else if (day >= 1 && day <= 29 && month == 2 && (year % 4 == 0)) {
        if (day == 29) {
            month += 1;
            day = 1;
            alert(`Наступна дата: ${day}.${month}.${year}`);
        } else if (day <= 28) {
            day += 1;
            alert(`Наступна дата: ${day}.${month}.${year}`);
        } else {
            alert('Невірно введена дата');
        }
    } else {
        alert('Невірно введена дата');
    }












    // Лекції
    // let fruits = ["Яблоко", "Апельсин", "Груша", "Лимон"];
    // for (i = 0; i < fruits.length; i++) {
    //     console.log(fruits[i]);
    // }

    // let product = ["vegetables", "fruits", "butter", "bread"];
    // let lastItem = product.length - 1;
    // console.log("Last item is", product[lastItem]);
    // console.log(product);

    // Задача. Написать функцию которая принимает на вход 2 параметра: массив, и элемент (любого типа).
    // Этот элемент нужно добавить в конец массива.
    // Функция должна вернуть массив с добавленным новым элементом.

    // let number = ["1", "2", "3", "4"];

    // function addVariableintoArray(array, value) {
    //     array.push(value);
    //     return number;
    // }
    // console.log(addVariableintoArray(number,'5'));

    // let fruits = ["apple", "orange"];
    // fruits.push("kiwi");
    // console.log(fruits);
    // fruits[fruits.length - 2] = "pear";
    // console.log(fruits);
    // console.log(fruits.shift());
    // fruits.unshift("apricot", "peach");
    // console.log(fruits);


    // Задача.
    // Написать функцию которая принимает на вход массив и возвращает случайное значение из этого массива.
    // Код для генерации случайного числа в промежутке.
    // let rand = min + Math.floor(Math.random() * (max + 1 - min));

    // let rand = [1, 5, 10, 58, 65, 24];
    // function randomNumber(arr) {
    //     return arr[Math.floor(Math.random() * arr.length)];
    // }
    // console.log(randomNumber(rand));

    // Задача.
    // Создайте функцию find(arr, value), 
    // которая ищет в массиве arr значение value и возвращает его позицию, если найдено, или -1, если не найдено.
    // let array = ["1", "10", "25", "36", "98", "58", "65", "24", "fruit"];
    // let find = function find(arr, value) {

    //     return arr.indexOf(value);

    // }
    // console.log(find(array, 'fruit'));
});