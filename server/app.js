const express = require('express');
const fs = require('node-fs-extra');
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
app.use('*', cors());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(path.resolve(__dirname, '../public')));
app.use(favicon(path.resolve(__dirname, '../public', 'favicon.ico')));

fs.copy(path.resolve(__dirname, '../build/bundle.js'), path.resolve(__dirname, '../public/javascripts/bundle.js'));
fs.copy(path.resolve(__dirname, '../build/style.css'), path.resolve(__dirname, '../public/stylesheets/style.css'));

// app source
app.use('/headers', headers);


// serve html
app.use('*', index);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
  console.log(err)
});
















// kick server !
const debug = require('debug')('simpleReact:server');

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '50045');
app.set('port', port);

/**
 * Create HTTP app.
 */

// const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

app.listen(port, () => {
  console.log('server running .. ');
  console.log(`====================================================================
    ${process.env.npm_package_description}
    PORT: ${port}

    Happy coding ...



    ${process.env.npm_package_homepage}
  ==================================================================`);
});
app.on('error', onError);
app.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = app.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
