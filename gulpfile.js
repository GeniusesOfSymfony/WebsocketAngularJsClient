var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

gulp.task('serve', function() {
    return gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(concat('angular-websocket.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
    watch('src/*.js', function () {
        gulp.src('src/*.js')
            .pipe(uglify())
            .pipe(concat('angular-websocket.js'))
            .pipe(gulp.dest('dist'))
        ;
    });
});