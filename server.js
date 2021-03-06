const express = require('express');
const app = express();
const path = require("path");
app.use(express.static(__dirname + "/static"));
const server = app.listen(1337);
const io = require('socket.io')(server);
var counter = 0;

app.set('vews', __dirname + './static');
app.set('view engine', 'ejs');

io.on('connection', function(socket) {
    socket.emit('greeting', {msg: 'Greetings, from server Node -server'});
    socket.on('thankyou', function(data) {
        console.log(data.msg);})

    socket.on('new-form', function(data) {
        console.log(data);
        socket.emit('form-data', data);
    })
});

app.get('/', function(req, res){ 
    res.render('index');
});

app.get('/data', function(req, res){

})