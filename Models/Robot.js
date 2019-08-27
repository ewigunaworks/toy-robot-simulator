'use strict'

function Robot() {
	
}

Robot.prototype.place = function(x, y, facing) {
	this.x = parseInt(x);
	this.y = parseInt(y);
	this.facing = facing;
}

Robot.prototype.move = function(table) {
	var facing = this.facing;
	switch(facing){
		case 'NORTH':
			if(this.y < (table.y - 1)){
				this.y += 1; 
			}
			break;
		case 'SOUTH':
			if(this.y > 0){
				this.y -= 1; 
			}
			break;
		case 'EAST':
			if(this.x < (table.x - 1)){
				this.x += 1; 
			}
			break;
		case 'WEST':
			if(this.x > 0){
				this.x -= 1; 
			}
			break;
	}
}

module.exports = Robot;