/*jslint node:true,unparam:true*/
'use strict';

var http = require('http');
var express = require('express');

// Constants
var DEFAULT_PORT = 8080;
var PORT = process.env.PORT || DEFAULT_PORT;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World\n');
  var cubeRequest = http.request({
    hostname: process.env.CUBE_COLLECTOR_PORT_1080_TCP_ADDR || 'localhost',
    port: process.env.CUBE_COLLECTOR_PORT_1080_TCP_PORT || 1080,
    path: '/1.0/event/put',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  cubeRequest.write(JSON.stringify([{ type: 'hello_cube' }]));
  cubeRequest.end();
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
