const gulp = require('gulp');
const browserSync = require('browser-sync').create();

function watch() {
	browserSync.init({
		server: {
			baseDir: 'src'
		}
	});
	gulp.watch('./src/**/*.html').on('change', browserSync.reload);
	gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
	gulp.watch('./src/css/**/*.css').on('change', browserSync.reload);
}

exports.default = watch;
