const express = require('express');
const cors = require('cors');
let http = require('http');
let fs = require('fs');

const app = express();
app.use(cors());


app.use('/images', express.static(__dirname + '/Images'));

app.use('/', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./index.html', null, function(error, data) {
        if (error) {
            res.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            res.write(data);
        }
        res.end();
    });
});


app.listen(8000);