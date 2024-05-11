import * as fs from 'node:fs'

const data = "Hello World!";

fs.writeFile('file.txt', data, (error) => {
    if (error) {
        console.log(error);
        return
    }
    console.log('the data has been written')
});