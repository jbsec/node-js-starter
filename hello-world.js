const http = require('http');

const hostname = '127.0.0.1'; // or localhost?
const port = 3000; // or any port really

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// to run this, you need to install node.js
// you can check if node is installed with node -v 
// after running this visit http://127.0.0.1:3000 
// you should see "Hello World!" on the web browser.