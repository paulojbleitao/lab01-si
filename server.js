let express = require('express');
let http = require('http');

let app = express();
let server = http.Server(app);

app.use(express['static'](__dirname));

server.listen(3000, () => {
    console.log('Listening on port 3000');
});