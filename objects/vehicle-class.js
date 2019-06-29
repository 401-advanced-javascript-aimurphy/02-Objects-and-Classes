'use strict';

// class Car {
// }

// module.exports = Car;

class Vehicle{
  constructor(name, wheels){
    this.name = name;
    this.wheels = wheels;
  }
  drive(){
    return 'Moving Forward';
  }
  stop(){
    return 'Stopping';
  }
}


class Car extends Vehicle{
  // wheels(){
  //   return 4;
  // }
}

class Motorcycle extends Vehicle{
  // wheels(){
  //   return 2;
  // }
  wheelie(){
    return 'Wheee!';
  }
}

module.exports = {Car, Motorcycle};