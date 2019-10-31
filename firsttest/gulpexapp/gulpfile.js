// const gulp = require('gulp');
/*
 TOP LEVEL FUNCTIONS
 gulp.task - Define tasks
 gulp.src - point to file to use
 gulp.dest -  points to folder to output
 gulp.watch - watch files and folders for changes

*/

// LOGS MESSAGE

// gulp.task('message', function(){
//     return console.log('Gulp is running here...');
// });


// gulp.task('default', function(){
//     return console.log('Gulp is running ...');
// });

var gulp = require('gulp');
var rename =  require('gulp-rename');
var sass = require('gulp-sass');

var styleSRC = './src/scss/style.scss';
var styleDIST = '../public/css/';

gulp.task('styles', function(){
    gulp.src(styleSRC)
    .pipe(sass({
        errLogToConsole: true,
        outputStyle: 'compressed'
    }))
    .on('error', console.error.bind(console))
    .pipe( rename({ suffix:'.min'}))
    .pipe( gulp.dest( styleDIST));
    
});