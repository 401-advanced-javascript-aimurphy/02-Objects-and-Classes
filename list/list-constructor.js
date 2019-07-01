'use strict';

function List() {
  this.length = 0;
  this.data = {};
}
/*
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/*
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length-1];
  delete this.data[this.length-1];
  this.length--;
  return returnValue;
};

// list.shift 
// remove an item from the beginning of an array and return its value
List.prototype.shift = function() {
  let returnValue = this.data[0];
  for(let i=0;i<this.length;i++){
    this.data[i]=this.data[i+1];
  }
  delete this.data[this.length-1];
  this.length--;
  return returnValue;
};

// list.unshift
// adds item(s) to the beginning of an array and returns the new length of the array
List.prototype.unshift = 
function(item){
  for(let i=this.length-1;i>=0;i--){
    this.data[i+1]=this.data[i];
  }
  this.data[0]=item;
  this.length++;
  return this.length;
};

//list.forEach
//iterates over an array does not mutate returns nothing.
List.prototype.forEach = function(callback){
  for (let i=0;i<this.length;i++){
    callback(this.data[i],i);
  }
};

//list.map
//returns a new array with a callback executed on each element
List.prototype.map = function(callback){
  let returnValue = new List();
  for (let i=0;i<this.length;i++){
    console.log(i, this.data[i]);
    returnValue.push(callback(this.data[i],i));
  }
  return returnValue;
};

//list.filter
//returns new array containing previous array elements whose values returned true against filtering criteria 
List.prototype.map = function(callback){
  let returnValue = new List();
  for (let i=0;i<this.length;i++){
    console.log(i, this.data[i]);
    returnValue.push(callback(this.data[i],i));
  }
  return returnValue;
};

//list.reduce
//returns a single value derived from all the values in the array.

module.exports = List;

