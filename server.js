//call modules
var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

//contains the environment if set if not sets to development
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//express app
var app = express();

//compile function used by stylus middleware
function compile (str, path) {
    return stylus(str).set('filename', path);
}

//app configurations
    //set view's path
app.set('views', __dirname + '/server/views');
    //set view's engine
app.set('view engine', 'jade');
    //express login
app.use(logger('dev'));
    //body parser middleware 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
    //stylus middleware
app.use(stylus.middleware(
    {
        src: __dirname + '/public',
        compile: compile
    }
));

//express's static middleware
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));


//mongo connection
if (env === 'development') {
    mongoose.connect('mongodb://localhost/multivision');
} else {
    mongoose.connect('mongodb://manuhdb:multivisiondb@ds117849.mlab.com:17849/multivisiontrain');
};
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
    console.log('multivision db opened');
});

//server side route for partials files
app.get('/partials/*', function(req, res) {
    res.render('../../public/app/' + req.params[0]);
})

//route that delivers the index page
app.get('*', function(req, res) {
    res.render('index');
});

//listen to requests
var port = process.env.PORT || 3030;
app.listen(port);
console.log("Listening on port " + port + '...');