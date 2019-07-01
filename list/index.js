'use strict';

const List = require('./list-constructor.js');

let stuff = new List();
stuff.push('a');
stuff.push('b');
stuff.push('c');
stuff.pop();
stuff.shift();
stuff.unshift('d');
let helloMap = stuff.map(x => 'hello ' + x + '!');
console.log(helloMap);

let last = stuff.pop();

console.log(last);

