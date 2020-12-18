const express = require('express'), //Your needed depedencies for this particular script
    alloy = require('alloyproxy'),
    app = express(),
    http = require('http'),
    fs = require('fs'),
    path = require('path'),
    char_insert = require('./src/charinsert.js');
const config = JSON.parse(fs.readFileSync('./config.json', {
    encoding: 'utf8'
}));
 
const server = http.createServer(app);

app.get('/', async (req, res) => { //Used for Querystring Navigation

    switch (req.url) {
        case '/':
            return res.send(fs.readFileSync(path.join(__dirname, 'views', 'index.html'), 'utf8'));
    }

    switch (req.url) {
        case '/?z':
            return res.send(fs.readFileSync(path.join(__dirname, 'views', 'pages', 'surf.html'), 'utf8'));
    }
});

app.use(char_insert.static(path.join(__dirname, 'views'))); //Where to serve your static assets.

server.listen(process.env.PORT || config.port); //For hosting your specific application with its port specified in config.json