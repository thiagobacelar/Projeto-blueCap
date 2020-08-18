var gulp    =  require('gulp');
var sass    =  require('gulp-sass');
var browserSync = require('browser-sync').create();
//var concat  =  require('gulp-concat');
//var uglify  =  require('gulp-uglify');
//var plumber =  require('gulp-plumber');

var source_sass = './assets/sass/*.scss';
var dest_css = './assets/css/';

gulp.task('server', function(){
  
  browserSync.init({
        server: {
            baseDir: "./"
        }
    });

});


gulp.task('sass', function(){
    return gulp.src(source_sass)
    .pipe(sass())
    .pipe(gulp.dest(dest_css));
});

gulp.task('watch', function(){
	gulp.watch([source_sass , dest_css], gulp.parallel(['sass']));
});

gulp.task('default', gulp.parallel(['watch','sass','server']));



