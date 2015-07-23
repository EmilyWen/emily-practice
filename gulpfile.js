'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
 var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var watchify = require('watchify');
var rename = require("gulp-rename");
// var sourcemaps = require('gulp-sourcemaps');
var reactify = require('reactify');
var assign = require('lodash').assign;


function bundleGenerator(isWatch) {
  var opts = assign({}, watchify.args, {
    entries : './example/app.jsx',
    transform : [reactify],
  });
  var b = browserify(opts);
  if(isWatch) {
    b = watchify(b);
  }
  var bundle = function () {
    return b.bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('bundle.js'))
        .pipe(rename(function (path) {
          path.extname = '.js';
          path.basename = 'app';
        }))
        .pipe(gulp.dest('./example'))
        .pipe(connect.reload());
  }
  if(isWatch) {
    b.on('update', bundle); // on any dep update, runs the bundler
    b.on('log', gutil.log); // output build logs to terminal
  }
  return bundle;
}
gulp.task('js', bundleGenerator(true));

gulp.task('default', ['js'], function() {
  connect.server({
    root : 'example',
    livereload : true,
    fallback : 'example/index.html',
  });
});

gulp.task('server', function() {
  connect.server({
    root : 'example',
    fallback : 'example/index.html',
  });
});
// gulp.task('default',["server"], function () {
//   var b = browserify({
//     entries: './example/app.jsx',
//     debug: true,
//     // defining transforms here will avoid crashing your stream
//     transform: [reactify]
//   });

//   gulp.task('server', function() {
//   connect.server({
//     root : 'example',
//     livereload : true,
//     fallback : 'example/index.html',
//   });
// });

//   return b.bundle()
//     .pipe(source('app.js'))
//     .pipe(buffer())
//     .pipe(gulp.dest('./example'))
//     .pipe(connect.reload());
// });