const {
  src,
  dest,
  series,
  watch,
  parallel
} = require('gulp'),
  minifyCSS = require('gulp-clean-css'),
  minifyJS = require('gulp-minify'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync').create(),
  cleaner = require('gulp-clean');

sass.compiler = require('node-sass');

function copy() {
  return src('./src/html/*.html')
    .pipe(dest('./dist'))
}

function assets(){
  return src('./src/assets/**/*')
  .pipe(dest('./dist/assets'))
}

function js() {
  return src('./src/js/*.js')
    .pipe(minifyJS({
      ext:{
        min:'.min.js'
    }
    }))
    .pipe(dest('./dist/assets/js'))
}

function css() {
  return src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(minifyCSS({
      compatibility: 'ie8'
    }))
    .pipe(dest('./dist/assets/css/'))
}

function reload() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
}

function watcher(){
  watch('./src/html/**/*.html').on('change', series(copy, browserSync.reload))
  watch('./src/js/**/*.js').on('change', series(js, browserSync.reload))
  watch('./src/scss/**/*.scss').on('change', series(css, browserSync.reload))
  watch('./src/assets/**/*').on('change', assets);
}

function clean(){
  return src('./dist', {read: false, allowEmpty: true})
    .pipe(cleaner());
}

exports.js = js
exports.copy = copy
exports.css = css
exports.reload = reload;
exports.build = series(clean, js, copy, css, assets);
exports.default = series(clean, js, copy, css, assets, parallel(reload, watcher));