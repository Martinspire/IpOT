var Config = require('./gulpfile.config');

var gulp = require('gulp');
var sass = require('gulp-sass');
var gls = require('gulp-live-server');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('typings/tsconfig.json');
var inject = require('gulp-inject');
var tsc = require('gulp-typescript');
var tslint = require('gulp-tslint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var debug = require('gulp-debug');
var order = require("gulp-order");
var open = require('gulp-open');
var config = new Config();

// define tasks here
gulp.task('default', ['run']);

/**
 * Lint all custom TypeScript files.
 */
gulp.task('lint-ts', function () {
  return gulp.src(config.allTypeScript)
    .pipe(tslint())
    .pipe(tslint.report('prose', {
      emitError: false
    }));
});

/**
 * Compile TypeScript and include references to app .d.ts files.
 */
gulp.task('compile-ts', function () {
  var sourceTsFiles = [config.allTypeScript,                //path to typescript files
                       config.libraryTypeScriptDefinitions];    //reference to d..ts files

  var tsResult = gulp.src(sourceTsFiles)
  .pipe(order([
    'app/dev/core/app.ts',
    'app/dev/core/core.ts',
    'app/dev/**/app.*.ts',
    'app/dev/**/*route*.ts',
    'app/dev/**/*.ts'
  ]))
  .pipe(sourcemaps.init())
  .pipe(tsc(tsProject));

  tsResult.dts.pipe(gulp.dest(config.tsOutputPath));
  return tsResult.js
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.tsOutputPath));
});

gulp.task('watch-ts', function () {
  gulp.watch('./**/*.ts', ['compile-ts']);
});


gulp.task('compile-sass', function () {
  gulp.src('./app/dev/assets/sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      indentedSyntax: true,
      sourceComments : 'normal'
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./app/dist/styles'));
});

gulp.task('watch-sass', function () {
  gulp.watch('./app/dev/assets/sass/**/*.scss', ['compile-sass']);
});

gulp.task('server', function () {
  // Start the server at the beginning of the task 
  var server = gls.new('server/server.js');
  server.start();

  // Restart the server when file changes 
  gulp.watch(['app/dev/**/*.html', 'app/dist/index.html'], function (file) {
    server.notify.apply(server, [file]);
  });
  gulp.watch(['app/dev/assets/images/**/*'], function (file) {
    server.notify.apply(server, [file]);
  });
  gulp.watch(['app/dev/assets/sass/**/*.scss'], function (file) {
    gulp.start('compile-sass');
    server.notify.apply(server, [file]);
  });
  gulp.watch(['app/dev/**/*.ts'], function (file) {
    gulp.start('compile-ts');
    server.notify.apply(server, [file]);
  });
  gulp.watch(['server/**/*.js'], server.start.bind(server));
});

gulp.task('open', function(){
  gulp.src(__filename)
    .pipe(open({uri: 'http://localhost:4000?nobackend'}));
});

gulp.task('vendor', function(){
  gulp.src([
    './node_modules/foundation-sites/js/vendor/jquery.js',
    './node_modules/foundation-sites/js/vendor/fastclick.js',
    './node_modules/chart.js/Chart.js',
    './app/dev/assets/scripts/MobileServices.Web-1.2.5.min.js',
    './node_modules/angular/angular.js',
    './node_modules/angular-ui-router/release/angular-ui-router.js',
    './node_modules/angular-chart.js/dist/angular-chart.js',
    './node_modules/angular-azure-mobile-service/dist/angular-azure-mobile-service.js',
    './node_modules/foundation-sites/js/foundation.js'
  ])
    .pipe(sourcemaps.init())
    .pipe(concat('vendor.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./app/dist/scripts'));
  
  gulp.src([
    './node_modules/foundation-sites/css/normalise.min.css',
    './node_modules/foundation-sites/css/foundation.min.css',
    './node_modules/angular-chart.js/dist/angular-chart.css'
  ])
    .pipe(sourcemaps.init())
    .pipe(concat('vendor.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./app/dist/styles'));
});

gulp.task('run', ['compile-ts', 'compile-sass', 'vendor'], function(){
  gulp.start('server');
  gulp.start('open');
});