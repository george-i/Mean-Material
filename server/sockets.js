var colors = require('colors'); // just for fun
var io = require('socket.io')(8222);

var connectedUsers = 0;
var writtenData = '';
exports.ioSockets = io.sockets;

io.sockets.on('connection', function (socket){
    connectedUsers++;
    console.log('Socket user connected.'.green);
    console.log('Connected users: '+connectedUsers+'');

    socket.on('disconnect', function () {
        connectedUsers--;
        if(connectedUsers === 0){writtenData = '';}
        console.log('Socket user disconnected.'.red);
        console.log('Connected users: '+connectedUsers+'');
    });

    socket.on('giveMeData', function (callback){
        callback(writtenData);
    });

    socket.on('writing', function (msg, callback){
        writtenData = msg;
        socket.broadcast.emit('writing', msg);
    });

    socket.on('newMessage', function (msg, callback){
        socket.broadcast.emit('newMessage', msg);
    });

    socket.on('clearMessages', function (msg, callback){
        socket.broadcast.emit('clearMessages', msg);
    });
});