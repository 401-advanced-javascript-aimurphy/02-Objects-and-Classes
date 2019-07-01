'use strict';

class List {

  constructor() {
    this.length = 0;
    this.data = {};
  }

  /*
   * Add item to the end of the list
   * @param item
   */
  push(item) {
    // Add an item to the end
    this.data[this.length] = item;
    this.length++;
  }

  /*
   * // Remove an item from the end of the list and return it's value
   * @returns {*}
   */
  pop() {
    let returnValue = this.data[this.length];
    delete this.data[this.length];
    this.length--;
    return returnValue;
  }


  // shift 
  // remove an item from the beginning of an array and return its value
  shift() {
    let returnValue = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return returnValue;
  }

  // unshift
  // adds item(s) to the beginning of an array and returns the new length of the array
  unshift(item) {
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[0] = item;
    this.length++;
    return this.length;
  }

  //forEach
  //iterates over an array does not mutate returns nothing.
  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this.data[i], i);
    }
  }

  //map
  //returns a new array with a callback executed on each element
  map(callback) {
    let returnValue = new List();
    for (let i = 0; i < this.length; i++) {
      console.log(i, this.data[i]);
      returnValue.push(callback(this.data[i], i));
    }
    return returnValue;
  }

  //filter
  //returns new array containing previous array elements whose values returned true against filtering criteria 
  map(callback) {
    let returnValue = new List();
    for (let i = 0; i < this.length; i++) {
      console.log(i, this.data[i]);
      returnValue.push(callback(this.data[i], i));
    }
    return returnValue;
  }



}

module.exports = List;
