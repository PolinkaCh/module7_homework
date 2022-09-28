/*Задание 2
Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство
с данным именем. Функция должна возвращать true или false.*/

function getStrAndObj (str, obj) {
    console.log (str in obj)
}

let family = {                  //создаём объект
    mom: "Lena",
    grandma: "Nastya"
 }
 getStrAndObj ("mom", family )