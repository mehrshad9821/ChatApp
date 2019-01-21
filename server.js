 var express = require('express');

 var app = express();
 var http = require('http').Server(app);
 var io = require('socket.io')(http);

 io.on('connection',function(socket){




     console.log("we have a connection");
     socket.on("new-message",function(msg){


         console.log(msg);
         io.emit("Recieve-message", msg);



     })

     socket.on("test",function () {
         console.log("mounted");
     })
 });


 http.listen('3000',function () {

     console.log("we are connected");
     
 });


