var gulp  = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default', () => {
    console.log('Congrats');
});

gulp.task('html', () => {
    console.log('Html');
})

gulp.task('watch', () => {
    watch('./app/index.html', () => {
        gulp.start('html');
    })
});