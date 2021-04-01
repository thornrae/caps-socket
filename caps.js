'use strict';

require('dotenv').config();

const port = process.env.PORT || 3000;

//this starts a server on a generic name space 
const io = require('socket.io')(port);
const caps = io.of('/caps');

io.on('connection', (socket) => {
  console.log('connected?', socket.id);
})


// console.log(caps); 
// const drive = io.of('/driver');

// io.on('connection', 'connected!!');


caps.on('connection', (socket) => {

  socket.on('pickup', (payload) => {
    socket.broadcast.emit('pickup', payload);
    // console.log('working?')
  }) 
  console.log('connected to', socket.id)
  
})


