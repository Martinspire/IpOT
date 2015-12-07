var Config = require('./gulpfile.config');

var gulp = require('gulp');
var sass = require('gulp-sass');
var gls = require('gulp-live-server');
var eslint = require('gulp-eslint');
var htmlhint = require('gulp-htmlhint');
var sasslint = require('gulp-sass-lint');
var inject = require('gulp-inject');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var debug = require('gulp-debug');
var order = require('gulp-order');
var open = require('gulp-open');
var plumber = require('gulp-plumber');
var templateCache = require('gulp-angular-templatecache');
var config = new Config();

// define functions here
function watchAndReload(startFunction, server, file){
    gulp.task('watchAndReload', [startFunction], function(){
        server.notify.apply(server, [file]);
    });
    gulp.start('watchAndReload');
}

// define tasks here
gulp.task('default', ['run']);

gulp.task('compile-js', function() {
    return gulp.src(config.devJs)
        .pipe(plumber(config.plumberOptions))
        .pipe(order([
            'app/dev/core/app.js',
            'app/dev/core/core.js',
            'app/dev/**/app.*.js',
            'app/dev/**/*route*.js',
            'app/dev/**/*.js'
        ]))
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.outputJs));
});

gulp.task('compile-sass', function() {
    gulp.src(config.devScssMain)
        .pipe(plumber(config.plumberOptions))
        .pipe(sourcemaps.init())
        //.pipe(sasslint({config: '.sass-lint.yml'})) Currently broken
        //.pipe(sasslint.format()) Currently Broken
        .pipe(sass.sync(config.sassOptions).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer())
        .pipe(gulp.dest(config.outputScss));
});

gulp.task('compile-templates', function() {
    gulp.src(config.devHtml)
        .pipe(plumber(config.plumberOptions))
        .pipe(htmlhint(config.htmlOptions))
        .pipe(htmlhint.reporter())
        .pipe(sourcemaps.init())
        .pipe(templateCache())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.outputScripts));
});

gulp.task('vendor', function() {
    gulp.src(config.vendorJs)
        .pipe(plumber(config.plumberOptions))
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.outputScripts));

    gulp.src(config.vendorCss)
        .pipe(plumber(config.plumberOptions))
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.outputScss));

    gulp.src(config.vendorFonts)
        .pipe(plumber(config.plumberOptions))
        .pipe(gulp.dest(config.outputFonts));
});

gulp.task('server', function() {
    // Start the server at the beginning of the task 
    var server = gls.new(config.serverJs);
    server.start();

    // Restart the server when file changes 
    gulp.watch([config.devAllHtml], function(file) {
        //gulp.start('compile-templates');
        //server.notify.apply(server, [file]);
        watchAndReload('compile-templates', server, file);
    });
    gulp.watch([config.devImages], function(file) {
        server.notify.apply(server, [file]);
    });
    gulp.watch([config.devScss], function(file) {
        //gulp.start('compile-sass');
        //server.notify.apply(server, [file]);
        watchAndReload('compile-sass', server, file);
    });
    gulp.watch([config.devJs], function(file) {
        //gulp.start('compile-js');
        //server.notify.apply(server, [file]);
        watchAndReload('compile-js', server, file);
    });
    gulp.watch([config.serverFilesJs], server.start.bind(server));
});

gulp.task('open', function() {
    gulp.src(__filename)
        .pipe(plumber(config.plumberOptions))
        .pipe(open({
            uri: 'http://localhost:4000?nobackend'
        }));
});

gulp.task('run', ['compile-js', 'compile-sass', 'compile-templates', 'vendor'], function() {
    gulp.start('server');
    gulp.start('open');
});
