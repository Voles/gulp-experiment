var gulp = require('gulp');
var recess = require('gulp-recess')
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');

gulp.task('default', function () {
  console.log('Init default task');
});

gulp.task('css', function () {
  return gulp.src('src/less/main.less')
    .pipe(recess())
    .pipe(less())
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function () {
  return gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
});

