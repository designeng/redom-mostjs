const gulp = require('gulp');
const soften = require('gulp-soften');
const tabify = require('gulp-tabify');
const rimraf = require('rimraf')
const { promisify } = require('util');

const rimrafP = promisify(rimraf);

gulp.task('soften', async function () {
    await rimrafP('./build');
    await gulp.src('./js/**/*.js')
        .pipe(soften(8))
        .pipe(gulp.dest('build'))
});

gulp.task('tabify', async function () {
    await rimrafP('./build');
    return gulp.src('./js/**/*.js')
        .pipe(tabify(4, true))
        .pipe(gulp.dest('build'));
});
