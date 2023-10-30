var express = require('express');
const http = require('http');
var cors = require('cors');
var bodyParser = require('body-parser');
const session = require('express-session');
const crypto = require('crypto');
const secretKey = crypto.randomBytes(64).toString('hex');
var app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://192.168.0.145:3000",
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials: true
  },
});
var usersArray=[];
var socketIds=[];
var socket_id='';

app.use(cors({
  origin: 'http://192.168.0.145:3000', // Allow requests from this origin (React app)
  credentials: true // Enable credentials (cookies, authorization headers)
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
  secret: secretKey,
  resave: false,
  saveUninitialized: true
}));

app.post('/validate', async (req, res) => {
  usersArray.push(req.body.email);
  req.session.username = req.body.email;     

  
  io.emit('fetch_users', { users: usersArray });  
  res.json({ data: req.body.email });
});


io.on('connection', (socket) => {  
  console.log('SOCKET CONNECTING '+socket.id);   

  socket.on('SendMessage',(data)=>{   
    console.log(socketIds); 
    console.log(socketIds[data.receiver]); 
    socket.to(socketIds[data.receiver]).emit('msg_rec', { data: data.message });  
  })

  socket.on('getUsers',(RecData)=>{
    socket.emit('fetch_users', { users: usersArray });    
    socketIds[RecData.data]=socket.id;
  })
  

})

server.listen(9999, () => {
  console.log('server runs');
});
