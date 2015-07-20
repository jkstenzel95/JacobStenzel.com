var express         = require('express');
var app             = express();
var stylus          = require('stylus');
var nib             = require('nib');
var mongoose        = require('mongoose');
var bodyParser      = require('body-parser');

var app = express();
//var db = mongoose.connect('mongodb://localhost/contactlist');

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}

app.set('views', __dirname + '/app');
app.set('view engine', 'jade');
app.use(stylus.middleware(
  { src: __dirname + '/app'
  , compile: compile
  }
));
app.use(express.static(__dirname + "/app"));
app.use(bodyParser.json());


app.get('/heyyo', function (req, res)    {
    res.render('tester');
    console.log('Heyyoooooooooooo World!');
})

app.listen(3000);
console.log("Server running on port 3000");