
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
var webpackConfig = require('../webpack.config.js');

//////////////////////////////////////////////////////////////////////////////////////////////
// FE task
//////////////////////////////////////////////////////////////////////////////////////////////

gulp.task('clean', function(cb){
  rimraf('./public/assets/app', cb);
});

gulp.task('traspile-scripts', function() {
  return gulp.src('./public/src/app.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./../be-app/public/assets/app'));
    pipe(gulp.dest('./public/assets/app'));;
});

gulp.task('less', function(){
  gulp.src('./public/less/**/*.less')
    .pipe(plumber())
    .pipe(concat('allmin.css'))
    .pipe(less())
    .pipe(gulp.dest('./../be-app/public/assets/css'))
    .pipe(gulp.dest('./public/assets/css'));
});

gulp.task('watch-fe', function(){
  gulp.watch('./public/src/**/*.js', ['clean','traspile-scripts']);
  gulp.watch('./public/less/**/*.less', function(){
    gulp.start('less');
  });
});

gulp.task('development', function(cb){
  run('watch-fe', 'clean', 'less', 'traspile-scripts', cb);

});