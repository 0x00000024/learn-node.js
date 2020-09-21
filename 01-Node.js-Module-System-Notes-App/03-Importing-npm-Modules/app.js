const validator = require('validator');
const getNotes = require('./notes.js');

const msg = getNotes();

console.log(msg);

console.log(validator.isEmail('afdsaf@aa.com'));
