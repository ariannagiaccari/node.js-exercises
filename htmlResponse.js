import { createServer } from 'node:http' 

const server = createServer((request, response) => {
    console.log('request received');

    response.statusCode = 200;

    response.setHeader('Content-Type', 'text/html');

});

server.listen(3001, () => {
    console.log('Server is running at http://localhost:3001')
});