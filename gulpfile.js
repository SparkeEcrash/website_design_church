const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');

// File paths
const DIST_PATH = 'public/dist';
const SCRIPTS_PATH = 'js/*.js';
const SASS_PATH = ['scss/*.scss', 'scss/**/*.scss'];

gulp.task('default', (done) => {
	console.log("this is the default task");
	done();
});

//Scripts
gulp.task('scripts', () => {
	console.log('starting scripts task');
	return gulp.src('js/*.js')
		.pipe(gulp.dest(DIST_PATH));
});

//Scripts Compressed
gulp.task('scripts-compressed', () => {
	console.log('starting scripts task');
	return gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest(DIST_PATH));
});

//Styles
gulp.task('sass', () => {
	console.log('starting sass task');
	return gulp.src('scss/styles.scss')
	.on('error', err => {
		console.log(err.toString());
		this.emit('end')
	})
	.pipe(sourcemaps.init())
	.pipe(autoprefixer({
		cascade: false
	}))
	.pipe(sass())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(DIST_PATH));
});


//Styles Compressed
gulp.task('sass-compressed', () => {
	console.log('starting sass task');
	return gulp.src('scss/styles.scss')
	.on('error', err => {
		console.log(err.toString());
		this.emit('end')
	})
	.pipe(autoprefixer({
		cascade: false
	}))
	.pipe(sass({
		outputStyle: 'compressed'
	}))
	.pipe(gulp.dest(DIST_PATH));
});

gulp.task('watch', (end) => {
	console.log('starting watch task');
	gulp.watch(SCRIPTS_PATH, gulp.series('scripts'));
	gulp.watch(SASS_PATH, gulp.series('sass'));
	end();
});