var gulp            = require('gulp'),
	plugin          = require('gulp-load-plugins')(),
	cleanCss        = require('gulp-clean-css'),
	rename          = require('gulp-rename'),
	minify          = require('gulp-minify'),
	runSequence     = require('run-sequence');

gulp.task('sass', function () {
	return gulp.src('./sass/*')
	.pipe(plugin.sass())
	.pipe(gulp.dest('./public/css/'))
});

gulp.task('minify-css', function () {
	return gulp.src('./public/css/*')
	.pipe(cleanCss())
	.pipe(rename({
		suffix: ".min"
	}))
	.pipe(gulp.dest('./public/css_min/'))
});

gulp.task('compress', function () {
	return gulp.src('./js/*')
	.pipe(minify({
		min: '.js',
		noSource: true
	}))
	.pipe(gulp.dest('./public/js_min/'))
});

gulp.task('copy',function(){
  return gulp.src([
		'./node_modules/ractive/ractive.min.js',
		'./node_modules/jquery/dist/jquery.min.js',
		'./node_modules/requirejs/require.js',
		'./node_modules/foundation-sites/js/foundation.min.js'

    ]).pipe(gulp.dest('./public/lib/'));
});

gulp.task('default', function () {
	runSequence('sass', 'minify-css', 'compress', 'copy');
});
