//////////////////////////////////////////////////////////////////////////////////////////////
// Required files
//////////////////////////////////////////////////////////////////////////////////////////////

var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('test-frontend', shell.task([
    //'./node_modules/.bin/nyc --reporter=html --reporter=text ./node_modules/.bin/mocha ./test/**/*.js '
    './node_modules/.bin/mocha ./test/**/*.js '
  ])
);