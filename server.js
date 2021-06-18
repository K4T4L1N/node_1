'use strict';
const express - require('express');

// Constants
const PORT = 8080;
const HOST - '0.0.0.0';

// App
const app = express();
app.get('7', (req, res) => {
var os=require("os");
res.send('Hello world' + os.hostname() + '\n');
});
app.listen (PORT, HOST);
console.log('Running on http://${HOST}:${PORT}');
