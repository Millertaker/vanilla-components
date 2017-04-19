
//////////////////////////////////////////////////////////////////////////////////////////////
// Required files
//////////////////////////////////////////////////////////////////////////////////////////////


var gulp = require('gulp');
var shell = require('gulp-shell');
var rimraf = require('rimraf');

var concat = require('gulp-concat');
var run = require('run-sequence');
var watch = require('gulp-watch');
var uglifycss = require('gulp-uglifycss');
var less = require('gulp-less');
var plumber = require('gulp-plumber');

var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var webpackConfigApp = require('./webpack.config.app.js');

var webserver = require('gulp-webserver');

//////////////////////////////////////////////////////////////////////////////////////////////
// FE task
//////////////////////////////////////////////////////////////////////////////////////////////

gulp.task('clean', function(cb){
  rimraf('./build', cb);
});

gulp.task('traspile-scripts', function() {
  return gulp.src('./public/src/**/*.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./build'));
});

gulp.task('docs-scripts', function() {
  return gulp.src('./public/docs/index.js')
    .pipe(webpack(webpackConfigApp))
    .pipe(gulp.dest('./docs/js'));
});

gulp.task('bundle-docs', function(){
  return run('traspile-scripts', 'docs-scripts');
})


gulp.task('less', function(){
  gulp.src('./src/less/**/*.less')
    .pipe(plumber())
    .pipe(concat('allmin.css'))
    .pipe(less())
    .pipe(gulp.dest('./build'))
    .pipe(gulp.dest('./docs/css'));
});

gulp.task('watch-fe', function(){
  gulp.watch('./src/js/**/*.js', ['clean','bundle-docs']);
  gulp.watch('./src/docs/**/*.js', ['bundle-docs']);
  gulp.watch('./src/less/**/*.less', function(){
    gulp.start('less');
  });
});

gulp.task('webserver', function() {
  gulp.src('./docs/')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('development', function(cb){
  run('watch-fe', 'clean', 'less', 'traspile-scripts', 'bundle-docs', 'webserver', cb);

});