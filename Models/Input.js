'use strict'

const fs = require('fs')

function Input(filename) {
	try {
		this.commands = fs.readFileSync(filename).toString().split('\n')
	} catch(e) {
		if(e.code == 'ENOENT') {
			console.log('File not found!')
		} else {
			throw e
		}
	}
}

function Input() {
	
}

Input.prototype.isFirstCommandValid = function() {
	let firstcommand = this.commands[0]
	let firstcommandupper = firstcommand.toUpperCase()

	let commanddtl = firstcommandupper.split(' ')
	if(commanddtl[0] == 'PLACE') {
		return true
	}

	return false
}

Input.prototype.getCommandNoArguments = function(command) {
	if(command.indexOf(' ') == -1) {
		return command
	}

	return command.slice(0, command.indexOf(' '))
}

Input.prototype.getCommandArguments = function(command) {
	let spaceIndex = command.indexOf(' ')
	let argumentString = command.slice(spaceIndex);
    let argumentArray =  argumentString.split(',');
    let argumentArrayWithoutSpace =  argumentArray.map(function(s) {return s.trim() });
    return argumentArrayWithoutSpace;
}

module.exports = Input;