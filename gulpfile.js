var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    webserver = require('gulp-webserver');

gulp.task('js', function() {
  return gulp.src('builds/aaronmichael/js/myscript.js')
    .pipe(jshint('./.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sass', function () {
    return sass('process/sass/style.scss', {
      sourcemap: true,
      style: 'compressed'
    })
    .on('error', function (err) {
        console.error('Error!', err.message);
    })
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('builds/aaronmichael/css'));
});

gulp.task('scripts', function () {
    return gulp.src('process/js/*.js')
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('builds/aaronmichael/js'))
});

gulp.task('watch', function() {
  gulp.watch('builds/aaronmichael/js/**/*', ['js']);
  gulp.watch(['process/sass/**/*'], ['sass']);
});

gulp.task('webserver', function() {
    gulp.src('builds/aaronmichael/')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('default', ['sass', 'scripts', 'watch', 'webserver']);
