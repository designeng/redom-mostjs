const gulp = require('gulp');
const soften = require('gulp-soften');
const rimraf = require('rimraf')
const { promisify } = require('util');

const rimrafP = promisify(rimraf);

gulp.task('soften', async function () {
    await rimrafP('./build');
    await gulp.src('js/**/*.js')
        .pipe(soften(8))
        .pipe(gulp.dest('build'))
})
