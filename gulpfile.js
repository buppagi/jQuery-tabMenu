"use stric";

var gulp = require('gulp'),
		util 	= require('gulp-util'),
		concat = require('gulp-concat'),
		uglify = require('gulp-uglify'),
		stripDebug	= require('gulp-strip-debug'),
		plumber = require('gulp-plumber'),
		rename = require('gulp-rename'),
		sourcemaps = require('gulp-sourcemaps'),
		bs = require('browser-sync').create(),
		reload = bs.reload;

var errorHandler = function (error) {
	console.error(error.message);
	this.emit('end');
};

var plumberOption = {
	errorHandler: errorHandler
};
gulp.task('server', function() {
	bs.init({
		server: { baseDir: "./" },
		ghostMode: { clicks: false, scroll: false}
	});
});
gulp.task('js', function(){
 	return gulp.src( 'tabMenu.js' )
 		.pipe( sourcemaps.init() )
		.pipe( plumber(plumberOption))
 		.pipe( uglify( {mangle:{toplevel:true}} ) )
 		.pipe(concat('tabMenu.min.js'))
 		.pipe(sourcemaps.write('maps'))
 		.pipe(gulp.dest( './' ))
 		.pipe( bs.reload({stream: true}) );
});

gulp.task('watch', function() {
	gulp.watch( 'tabMenu.js', ['js'] );
});

gulp.task('default', [
	'server',
	'js',
	'watch'
]);
