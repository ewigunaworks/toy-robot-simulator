'use strict'

const Robot = require('./Models/Robot')
const Input = require('./Models/Input')
const Table = require('./Models/Table')

const table = new Table(5, 5)

const robot = new Robot()

let args = process.argv.slice(2)
console.log(args)

if(args.length > 0) {
	let commandFileUrl = args[0]
	let input = new Input(commandFileUrl)

	if(input.commands && input.isFirstCommandValid()) {
		for(let i = 0; i < input.commands.length; i++) {
			let command = input.commands[i]

			switch(input.getCommandNoArguments(command)){
                case 'PLACE':
                    let placeArguments = input.getCommandArguments(command);
                    
                    let xPosition = placeArguments[0];
                    let yPosition = placeArguments[1];
                    let facing = placeArguments[2];
                    
                    if(((xPosition >= table.x) || (yPosition >= table.y)) || ((xPosition < 0) || (yPosition < 0))){
                        console.log('Robot position out of table top');
                        return;
                    }

                    robot.place(xPosition, yPosition, facing);
                    break;
                case 'MOVE':
                    robot.move(table);
                    break;
                case 'LEFT':
                case 'RIGHT':
                    robot.rotate(command);
                    break;
                case 'REPORT':
                    console.log("\n\nOutput:" + robot.x + "," + robot.y + "," + robot.facing + "\n\n");
                    break;
                default:
            }
		}
	} else {
		console.log("\n\nError: First command should be PLACE command\n\n");
	}
}