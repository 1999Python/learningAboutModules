
import { greet } from './greet.js';
import chalk from 'chalk';
import figlet from 'figlet';

// greet function and styling 
const name = 'Xola';
const greetingMessage = greet(name);
const newMessage = chalk.greenBright(greetingMessage);

// Displaying the styled greeting message
console.log(newMessage);

//  ASCII art , i chose rotated font
console.log(
    figlet.textSync(name, {
        font: 'Rotated',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true,
    })
);
