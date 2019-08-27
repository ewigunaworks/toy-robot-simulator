'use strict'

function Robot() {
	
}

Robot.prototype.place = function(x, y, facing) {
	this.x = parseInt(x);
	this.y = parseInt(y);
	this.facing = facing;
}

module.exports = Robot;