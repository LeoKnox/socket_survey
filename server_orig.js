const express = require('express');
const app = express();
const path = require("path");
app.use(express.static(__dirname + "/public"));
const server = app.listen(1337);
const io = require('socket.io')(server);
var counter = 0;

app.set('vews', __dirname + './public');
app.set('view engine', 'ejs');

io.on('connection', function(socket) {
    socket.emit('greeting', {msg: 'Greetings, from server Node -server'});
    socket.on('thankyou', function(data) {
        //$("div").text($("form").serialize());
        console.log(data.msg);
    });
});