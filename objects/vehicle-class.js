'use strict';

// class Car {
// }

// module.exports = Car;

class Vehicle{
  constructor(name){
    this.name = name;
  }
  drive(){
    return 'Moving Forward';
  }
  stop(){
    return 'Stopping';
  }
}

// use super
class Car extends Vehicle{
  constructor(name, wheels){
    super(name)
    this.wheels=4;
  }
}

class Motorcycle extends Vehicle{
  constructor(name, wheels){
    super(name)
    this.wheels=2;
  }
  wheelie(){
    return 'Wheee!';
  }
}

module.exports = {Car, Motorcycle};