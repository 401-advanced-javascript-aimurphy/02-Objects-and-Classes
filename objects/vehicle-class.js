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


class Car extends Vehicle{
  wheels(){
    return 4;
  }
}

class Motorcycle extends Vehicle{
  wheels(){
    return 2;
  }
  wheelie(){
    return 'Wheee!';
  }
}