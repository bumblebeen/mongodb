var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', function() {
  var error = false;
  gulp.
    src('./test.js').
    pipe(mocha()).
    on('error', function() {
      console.log('Tests failed!');
      error = true;
    }).
    on('end', function() {
      if (!error) {
        console.log('Tests succeeded! Password is :\n' +
          require('fs').readFileSync('./output.dat'));
        process.exit(0);
      }
    });
});

gulp.task('watch', function() {
  gulp.watch(['./test.js', './interface.js'], ['test']);
});