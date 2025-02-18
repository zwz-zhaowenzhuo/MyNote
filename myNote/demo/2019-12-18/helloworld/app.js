var express = require('express');
// var multer = require('multer');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var get = require('./routes/get');
var post = require('./routes/post');
var sleep = require('./routes/sleep');
var player = require('./routes/player');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(multer());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const request = require('request');
 
// 配置静态文件服务中间件
let serverUrl='http://61.135.169.121';//server地址
app.use(express.static(path.join(__dirname, './')));//静态资源index.html和node代码在一个目录下
app.use('/proxy', function(req, res) {
  let url = serverUrl + req.url;
  req.pipe(request(url)).pipe(res);
});

app.use('/', index);
app.use('/get', get);
app.use('/post',post);
app.use('/sleep',sleep);
app.use('/player',player);

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
  res.render('error');
});

app.listen(80);

module.exports = app;