const express = require('express');
const fs = require('fs');
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const app = express();

db('mongodb://localhost/basicIsomorphic');

// routes
const index = require('./routes/index');
const headers = require('./routes/headers');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('*', cors());
app.use(cors());
function writeBundle(savPath, srcPath) {
  fs.readFile(srcPath, 'utf8', function (err, data) {
      if (err) throw err;
      fs.writeFile(savPath, data, function(err) {
          if (err) throw err;
          console.log('complete write vendor');
      });
  });
}
writeBundle(path.resolve(__dirname, './public/javascripts/bundle.js'), path.resolve(__dirname, '../dist/bundle.js'));

// app source
app.use('/', index);
app.use('/headers', headers);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
  console.log(err)
});

module.exports = app;
