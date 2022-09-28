/* задание 1
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств.
Данная функция не должна возвращать значение.*/

function getObj (obj) {
    const myDog = Object.create(obj);           //создаём объект с прототипом
    myDog.age = 10                              //приписываем собственные новые свойства
    for (let key in myDog) {                    //проверка на собственные свойства
    if (myDog.hasOwnProperty (key))
    console.log (key + " : " + myDog[key])
  }
}

let dog = {           //создаём объект
    age: 9 ,
    name:'Bublik'
}

getObj (dog)