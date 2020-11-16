require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const expressLayouts = require('express-ejs-layouts');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const bcrypt = require('bcryptjs');
const helpers      = require('handlebars-helpers');
const session      = require('express-session');
const MongoStore   = require('connect-mongo')(session);




mongoose
  .connect('mongodb://localhost/route-app', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
  ///////////////////////
  const plainPassword = 'cat';
  const salt = bcrypt.genSaltSync(10); //rounds needed to encrypt the password, normally 10; amount of times we will encrypt the encryption. time-taking. you don't want them waiting a minute while signing up to do all this behind the scenes while they wait. 
  console.log(salt); //each time you run it you get a different salt
  const hash = bcrypt.hashSync(plainPassword, salt);
  
  console.log(`my hashed password is ${hash}`); //each time you run it you get a different hashed pw.
  
  //how to know the pw i typed is the pw thats hashed on the db? bcrypt does that too.
  const wrongPlainPW = 'cato';
  const verifyPassword = bcrypt.compareSync(plainPassword, hash);
  console.log(`Password verified: ${verifyPassword}`);
  const verifyPassword2 = bcrypt.compareSync(wrongPlainPW, hash);
  console.log(`Password verified2: ${verifyPassword2}`);
////////////////////////
const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      
//front end session
app.use(
  session({
    secret: 'my secret',
    cookie: { maxAge: 60000 },//time limits for logging out if you don't move the mouse. cookie refreshes with each session.
    rolling: true,
    store: new MongoStore({
      //it stores the mongo connection to the db we are working in. we may not need this in this entire course.
      mongooseConnection: mongoose.connection
    })
  })
)


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';
app.locals.gmapKey = process.env.GOOGLE_MAPS_API_KEY;
app.locals.zomatoKey = process.env.ZOMATO_KEY;

const index = require('./routes/index');
app.use('/', index);

//AFTER CUTTING AND PASTING INDEX TO BOOK: THIS ADDED:
// const book = require('./routes/book');
// app.use('/', book);
////////////////
//AFTER MAKING THE AUTHOR-CREATE.HBS:
// const author = require('./routes/author');
// app.use('/', author);
//////////////11.11 cyber security stuff///////////////////////
const auth = require('./routes/auth');
app.use('/', auth);


const zomatoApi = require("./routes/zomato-api");
app.use("/", zomatoApi);

const restaurantsResult = require('./routes/index');
app.use('/', restaurantsResult);

module.exports = app;
