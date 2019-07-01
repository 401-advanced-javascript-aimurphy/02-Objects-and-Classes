'use strict';

// These 2 should be interchangeable!
// const List = require('../list.js');
const List = require('../list.js');

describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    expect(stuff.length).toEqual(3);
    expect(stuff.data[2]).toEqual('c');
  });

  it('pop items off the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    stuff.pop();
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });
  
  it('shifts items off of the beginning of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    stuff.pop();
    stuff.shift();
    expect(stuff.length).toEqual(1);
    expect(stuff.data[0]).toEqual('b');
  });

  it('unshift items into the beginning of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    stuff.pop();
    stuff.shift();
    stuff.unshift('d');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[0]).toEqual('d');
  });

  it('iterates over an array does not mutate returns nothing', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    stuff.pop();
    stuff.shift();
    stuff.unshift('d');
    stuff.forEach(x=>console.log(x));
    expect(stuff.length).toEqual(2);
    expect(stuff.data[0]).toEqual('d');
  });

  it('maps over the list executes a callback on each item and returns a new list of those values resulting from the callback', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    stuff.pop();
    stuff.shift();
    stuff.unshift('d');
    let helloMap = stuff.map(x => 'hello '+x+'!');
    expect(helloMap.length).toEqual(2);
    expect(helloMap.data[0]).toEqual('hello d!');
  });
});
