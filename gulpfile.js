const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');


gulp.task('compile',function(){
    return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css/'))
})
gulp.task('watch',function(){
    gulp.watch('./scss/**/*.scss',gulp.series('compile'))
})

 
gulp.task('clear-css', () => {
    return gulp.src('css/*style.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist'));
  });
  gulp.task('minify', function () {
    gulp.src('js/script.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});