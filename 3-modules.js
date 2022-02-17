//Modules
const names = require('./4-names');
const sayHi = require('./5-utils');
// console.log(names);
const data = require('./6-alternative-flavour');
console.log(data);

require('./7-mind-grenade'); //will auto-invoke any method called inside

sayHi('susan');
// sayHi(john);
// sayHi(peter);
sayHi(names.john);
sayHi(names.peter);