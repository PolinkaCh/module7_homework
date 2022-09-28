/* Задание 5 
Переписать консольное приложение из предыдущего юнита на классы.*/

class ElectricalAppliance {                              // создаём родительский класс
    constructor(type, name){
      this.newAppliance = function (){
        console.log ("Обнаружен новый прибор")
      }
      this.type = type,
      this.name = name
    }
    getPowerOn () {
        console.log ("Электрический прибор " + this.name + " включен");                  //метод родителя для включения прибора
    }
    getPowerOff () {
        console.log ("Электрический прибор " + this.name + " выключен");                 //метод родителя для выключения прибора
    }
}
  
  
  // const computer = new ElectricalAppliance ("Бытовая техника", "компьютер");          //создание экземпляров 
  // const lamp = new ElectricalAppliance ("Светильник", "лампа");
  
  // lamp.getPowerOff ()                                                                 //Включение, выключение экземпляров
  // lamp.getPowerOn ()
  
  // computer.getPowerOn ()
  // computer.getPowerOff ()
  
  // console.log (computer)
  // console.log (lamp)
  
class Device extends ElectricalAppliance {                                             //создание подклассов устройств со своими свойствами и методами
    constructor (power, runtime, name) {
      super (name),    
      this.power = power,
      this.runtime = runtime
    }  
}
  
class Light extends ElectricalAppliance {
    constructor (typeFix, power) {
      super(),
      this.typeFix = typeFix,
      this.power = power
    }
    getTypeLamps (typeLamps) {
        console.log ('Светильник предназначен для ' + typeLamps + ' ламп')
    }   
}  
  
const computer = new Device ("100 Ватт", "10 часов")
console.log (computer)
  
const lamp = new Light ("настольный","20 Ватт" )
console.log (lamp)
lamp.getTypeLamps("диодных")
  