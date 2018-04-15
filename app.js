var express = require('express');
var mongoose = require('mongoose')
var bodyparser= require('body-parser')
var cors = require('cors')
var path =require('path')


var app =express();

const route =require('./routes/route');
// port number
const port =3000;

// connect mongo db
  mongoose.connect('mongodb://localhost:27017/constactlist');
// Mongo DB connected
mongoose.connection.on('connected',()=>{
console.log('Mongo DB cconnected port @27017');
});

// Mongo DB got any error
mongoose.connection.on('error',(error)=>{
    if(error) console.log('Mongo DB got an error',error);
    });
// cors
app.use(cors());
// body parser
app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: false}));

// routes
app.use('/api',route);


// Angular DIST output folder
app.use(express.static(path.join(__dirname, './ui/dist')));


// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './ui/dist/index.html'));
});



app.listen(port,()=>{
    console.log('Server started At: '+port);
})