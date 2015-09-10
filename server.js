var express         = require('express');
var app             = express();
var stylus          = require('stylus');
var nib             = require('nib');
var mongoose        = require('mongoose');
var bodyParser      = require('body-parser');
var passport        = require('passport');
var LocalStrategy   = require('passport-local').Strategy;
var cookieParser    = require('cookie-parser');
var session         = require('express-session');
var fs              = require('fs');
var bCrypt          = require('bcrypt-nodejs');

var dataConfig      = require('./config/database.js');

var app = express();
mongoose.connect(dataConfig.url);
app.use(session({secret: "ifACowEverGotTheChanceHe'dEatYouAndEveryoneYouCareAbout"}));
app.use(passport.initialize());
app.use(passport.session());

//--------BEGIN SETUP--------

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

//--------END SETUP----------

//--------BEGIN ROUTING--------

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/partials/:name', function (req, res)
{
  var name = req.params.name;
  res.render('partials/' + name);
});

app.get('/admin', isAuthenticated, function (req, res) {
  res.render('admin/admin-landing');
});

app.get('/admin/projects', isAuthenticated, function(req, res)  {
  res.render('admin/admin-projects');
});

app.get('/admin/music', isAuthenticated, function(req, res) {
  res.render('admin/admin-music');
});

app.get('/admin/blog', isAuthenticated, function(req, res)  {
  res.render('admin/admin-blog');
});

//--------END ROUTING----------

//--------BEGIN MONGODB--------

var userSchema = new mongoose.Schema({
  username: String,
  password: String
});

var User = mongoose.model('User', userSchema);
/**
var projectSchema = new mongoose.Schema({
  name: String,
  placecard: String,
  sref: String
});

var pieceSchema = new mongoose.Schema({
  name: String,
  styles: String,
  sref: String
});

var blogSchema = new mongoose.Schema({
  title: String,
  date: Date,
  tags: Number[],
  content: String
});
**/
//--------END MONGODB----------

//--------BEGIN AUTHENTICATION--------

app.post('/login', passport.authenticate('login'), function (req, res, next)  {
  res.send(200);
  next();
});

app.get('/isLoggedIn', function (req, res)  {
  res.send(req.isAuthenticated() ? true : false);
});

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

app.get('/testLoggedIn', function(req, res) {
  res.send("<p>You are " + (req.isAuthenticated() ? "" : "not ") + "logged in.</p>");
});

passport.serializeUser(function(user, done) {
  done(null, user._id);
});
 
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// Generates hash using bCrypt
var createHash = function(password){
 return bCrypt.hashSync(password, bCrypt.genSaltSync(10));
}

var isValidPassword = function(user, password){
  return bCrypt.compareSync(password, user.password);
}

passport.use('login', new LocalStrategy({
    passReqToCallback : true
  },
  function(req, username, password, done) { 
    // check in mongo if a user with username exists or not
    User.findOne({ 'username' :  username }, 
      function(err, user) {
        // In case of any error, return using the done method
        if (err)  {
          console.log("error!")
          return done(err, false);
        }
        // Username does not exist, log error & redirect back
        if (!user){
          console.log('User Not Found with username '+username);
          return done(null, false);                 
        }
        // User exists but wrong password, log the error 
        if (!isValidPassword(user, password)){
          console.log('Invalid Password');
          return done(null, false);
        }
        // User and password both match, return user from 
        // done method which will be treated like success
        return done(null, user);
      }
    );
}));

findOrCreateUser = function(username, password){
  // find a user in Mongo with provided username
  User.findOne({'username':username},function(err, user) {
    // In case of any error return
    if (err){
      console.log('Error in SignUp: '+err);
      return;
    }
    // already exists
    if (user) {
      console.log('User already exists');
      return;
    } else {
      // if there is no user with that email
      // create the user
      var newUser = new User();
      // set the user's local credentials
      newUser.username = username;
      newUser.password = createHash(password);

      // save the user
      newUser.save(function(err) {
        if (err){
          console.log('Error in Saving user: '+err);  
          throw err;  
        }
        console.log('User Registration successful');    
        return;
      });
    }
  });
}

function isAuthenticated(req, res, next) {
  // if user is authenticated in the session, carry on 
  if (req.isAuthenticated())
      return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}


//--------END AUTHENTICATION----------
app.listen(3000);
console.log("Server running on port 3000");