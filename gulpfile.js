var gulp = require('gulp'),
selenium = require('selenium-standalone'),
nightwatch = require('gulp-nightwatch');

gulp.task('selenium', function (done) {
  selenium.install({
    logger: function (message) { }
  }, function (err) {
    if (err) return done(err);

    selenium.start(function (err, child) {
      if (err) return done(err);
      selenium.child = child;
      done();
    });
  });
});

gulp.task('integration', ['selenium'], function () {
  return gulp.src('tests/functional/**/*.js')
    .pipe(nightwatch({
      configFile: 'nightwatch.json'
    }));
});

gulp.task('test:teardown', ['integration'], function () {
    selenium.child.kill();
});

gulp.task('test', ['test:teardown'], function () {

});