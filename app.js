var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var connectLivereload = require("connect-livereload");

// LiveReload server
var livereload = require("livereload");
var liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));


var indexRouter = require('./routes/index');
var contactRouter = require('./routes/contact');
var boekenRouter = require('./routes/boeken');
var loginRouter = require('./routes/login');



var app = express();

app.use(connectLivereload());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/contact', contactRouter);
app.use('/boeken', boekenRouter);
app.use('/login', loginRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// mongoDB connection
const uri = "mongodb+srv://dbUser:VfT90sq65jBqAjur@cluster.rozhm.mongodb.net/webshopDB?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB Connected…')
})
.catch(err => console.log(err))

// Request browser to reload page
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

module.exports = app;
