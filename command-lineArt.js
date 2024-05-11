const figlet = require('figlet');

function fruit(selectFruit) {
    switch (selectFruit) {
        case 'apple':
            console.log(figlet.textSync('You choose the apple'))
            break;
        case 'banana':
            console.log(figlet.textSync('You choose the banana'))
            break;
        case 'kiwi':
            console.log(figlet.textSync('You choose the kiwi'))
            break;
        default: console.log(figlet.textSync('Choose a fruit'))
            break;
    }
}

fruit('apple')