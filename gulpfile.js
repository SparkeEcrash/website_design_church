const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');

// File paths
const DIST_PATH = 'public/dist';
const SCRIPTS_PATH = 'public/js/*.js';
const SASS_PATH = ['public/scss/*.scss', 'public/scss/**/*.scss'];

gulp.task('default', (done) => {
	console.log("this is the default task");
	done();
});

//Scripts
gulp.task('scripts', () => {
	console.log('starting scripts task');
	return gulp.src('public/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest(DIST_PATH));
});

//Styles
gulp.task('sass', () => {
	console.log('starting sass task');
	return gulp.src('public/scss/styles.scss')
	.on('error', err => {
		console.log(err.toString());
		this.emit('end')
	})
	.pipe(sourcemaps.init())
	.pipe(autoprefixer({
		cascade: false
	}))
	.pipe(sass({
		outputStyle: 'compressed'
	}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(DIST_PATH));
});

gulp.task('watch', (end) => {
	console.log('starting watch task');
	gulp.watch(SCRIPTS_PATH, gulp.series('scripts'));
	gulp.watch(SASS_PATH, gulp.series('sass'));
	end();
});