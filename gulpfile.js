const { src, dest, watch, series } = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    concat = require('gulp-concat'),
    terser = require('gulp-terser'),
    cleanCSS = require('gulp-clean-css'),
    browsersync = require('browser-sync').create();

function scssTask() {
    return src('src/project/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('index.css'))
        .pipe(dest('dist/unminified'))
        .pipe(cleanCSS())
        .pipe(dest('dist/minified'));
}

function jsTask() {
    return src('src/project/**/*.js')
    .pipe(concat('index.js'))
    .pipe(dest('dist/unminified'))
    .pipe(terser())
    .pipe(dest('dist/minified'));
}

function browsersyncServer(cb) {
    browsersync.init({
        server: {
            baseDir: '.'
        },
        port: 8080,
        notify: false
    });
    cb();
}

function browsersyncReload(cb) {
    browsersync.reload();
    cb();
}

function watchTask() {
    watch('src/project/**/*.html', browsersyncReload);
    watch(['src/project/**/*.scss', 'src/project/**/*.js'], series(scssTask, jsTask, browsersyncReload));
}

exports.default = series(
    scssTask,
    jsTask,
    browsersyncServer,
    watchTask
);