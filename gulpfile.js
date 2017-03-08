var gulp            = require('gulp'),
	plugin          = require('gulp-load-plugins')(),
	cleanCss        = require('gulp-clean-css');
	rename          = require('gulp-rename');
	minify          = require('gulp-minify');
	runSequence     = require('run-sequence'),

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
	.pipe(gulp.dest('./public/cs_min/'))
});

gulp.task('compress', function () {
	return gulp.src('./js/*')
	.pipe(minify({
		min: '.js',
		noSource: true
	}))
	.pipe(gulp.dest('./public/js_min/'))
});

gulp.task('default', function () {
	runSequence('sass', 'minify-css', 'compress');
});
