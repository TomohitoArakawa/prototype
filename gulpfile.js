'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var $ = require('gulp-load-plugins')();
var browserSync =require('browser-sync');
var notifier = require('node-notifier');
var runSequence = require('run-sequence');
//var csscomb = require('gulp-csscomb');

// 設定
var config = {
  server : {
    port: 8282
  },
  js: {
    output: {
      directory: './js',
      fileName: 'app.js'
    },
    files: [
      './app/js/**/*.js'
    ]
  },
  sass: {
    output: {
      directory: './app/css'
    },
    files: [
        './app/scss/**/*.scss'
    ]
  },
  css: {
    output: {
      directory: './',
      fileName: 'style.css'
    },
    files: [
      './app/css/*.css'
    ],
    prefixer: [
      'last 3 versions',
      'ie >= 7',
      'safari >= 8',
      'ios >= 5',
      'android >= 2'
    ]
  }
};

// エラー時のnotify表示
var notify = function(taskName, error) {
  var title = '[task]' + taskName + ' ' + error.plugin;
  var errorMsg = 'error: ' + error.message;
  console.error(title + '\n' + errorMsg);
  notifier.notify({
    title: title,
    message: errorMsg,
    time: 5000
  });
};

// サーバ起動
gulp.task('server', function() {
  browserSync({
    port: config.server.port,
    server: {
      baseDir: './app/',
      index  : 'js_native_01.html'
    }
  });
});

// サーバ再起動
gulp.task('reloadServer', function () {
  browserSync.reload();
});

//sass
gulp.task('sass', function() {
  return gulp.src(config.sass.files)
    .pipe($.plumber({
      errorHandler: function(error) {
        notify('sass', error);
      }
    }))
    .pipe(sass())
    .pipe(gulp.dest(config.sass.output.directory));
});

// css系処理
// css連結 -> autoprefixer
gulp.task('css', function() {
  return gulp.src(config.css.files)
    .pipe($.plumber({
      errorHandler: function(error) {
        notify('css', error);
      }
    }))
    .pipe($.concat(config.css.output.fileName))
    .pipe($.pleeease({
      autoprefixer: {
        browsers: config.css.prefixer
      },
      minifier: false
    }))
    .pipe($.plumber.stop())
    .pipe(gulp.dest(config.css.output.directory));
});

// js系処理
gulp.task('js', function() {
  return gulp.src(config.js.files)
    .pipe($.concat(config.js.output.fileName))
    .pipe($.plumber.stop())
    // .pipe(gulp.dest(config.js.output.directory));
});

// jsとcssとscssのビルド処理
gulp.task('build', ['sass', 'css', 'js'], function() {});

gulp.task('watch', function() {
  gulp.watch('./app/*.html', function() {
    runSequence('reloadServer');
  });
  gulp.watch(config.sass.files, function(){
    runSequence('sass', 'reloadServer');
  });
  gulp.watch(config.css.files, function() {
    runSequence('css', 'reloadServer');
  });
  gulp.watch(config.js.files, function() {
    runSequence('js', 'reloadServer');
  });
});

gulp.task('default', ['build', 'watch', 'server']);
