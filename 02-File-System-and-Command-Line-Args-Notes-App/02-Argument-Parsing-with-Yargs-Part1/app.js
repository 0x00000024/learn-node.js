const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

console.log(yargs.argv);

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!');
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing a note');
    }
})

// TODO
