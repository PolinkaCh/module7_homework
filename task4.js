/* Задание 4
Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент). 
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.*/

function ElectricalAppliance (type)                         // создаём родителя 
{
  this.newAppliance = function (){
    console.log ("Обнаружен новый прибор")
  }
  this.type = type
  
}
ElectricalAppliance.prototype.getPowerOn = function (name) {            //метод родителя для включения прибора
  console.log ("Электрический прибор " + name + " включен")
}
ElectricalAppliance.prototype.getPowerOff = function (name) {           //метод родителя для выключения прибора
  console.log ("Электрический прибор " + name + " выключен")
}

//const computer = new ElectricalAppliance ("Бытовая техника");          //создание экземпляров 
//const lamp = new ElectricalAppliance ("Светильник");

// lamp.getPowerOff ("лампа")                                            //Включение, выключение экземпляров 
// lamp.getPowerOn ("лампа")

//  computer.getPowerOn ("компьютер")
//  computer.getPowerOff ("компьютер")

// console.log (computer)
// console.log (lamp)

function Device (name, power, runtime){                                    //создание классов устройств со своими свойствами и методами
  this.name = name,
  this.power = power,
  this.runtime = runtime
}

Device.prototype = new ElectricalAppliance ()

function Light (typeFix, power) {
  this.typeFix = typeFix,
  this.power = power
}  

Light.prototype = new ElectricalAppliance ()

Light.prototype.typeLamps = function (typeLamps) {
    console.log ('Светильник предназначен для ' + typeLamps + ' ламп')
} 



const computer = new Device ("100 Ватт", "10 часов")
console.log (computer)
const lamp = new Light ("настольный","20 Ватт")
console.log (lamp)
lamp.typeLamps("диодных")