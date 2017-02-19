/* eslint-disable no-console */

const gulp = require('gulp') ;
const GulpAutoprefixer = require('gulp-autoprefixer');
const envify = require('envify');
const sass = require('gulp-sass');
const del = require('del') ;
const Browserify = require('browserify') ;
const babelify = require('babelify') ;
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserSync = require('browser-sync');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');

browserSync.create();
const bundle = 'client.js';
const sourcePathJS = './src/client/';
const index = sourcePathJS + 'index.jsx';
const sourceSASS = './src/client/sass/**/*.scss';
const sourceSVG = './src/client/svg/**/*.svg';
const watchPaths = [sourcePathJS + '**/*.*', './src/common/**/*.*', sourceSASS, './node_modules/tes-sass/**/*'];
const destination = './public/';
const destinationJS = destination + 'js/';
const destinationCSS = destination + 'css/';
const destinationSVG = destination + 'svg/';

gulp.task('clean', cb => del([destination], cb));

gulp.task('build:js', () => {
  const browserifyOpts = {
    cache: {},
    debug: true,
    packageCache: {},
    extensions: ['.jsx', '.js']
  };
  new Browserify(index, browserifyOpts)
    .transform(babelify, {
      presets: ['node6', 'latest', 'react'],
      plugins: [
        'add-module-exports', 'transform-es2015-destructuring', 'transform-object-rest-spread'
      ]
    })
    .transform(envify)
    .bundle()
    .on('error', (err) => {
      console.error('Error', err.message);
    })
    .pipe(source(bundle))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(destinationJS));
});

gulp.task('build:sass', () => {
  gulp.src(sourceSASS)
    .pipe(sass({
      errLogToConsole: true,
      sourceMap: true,
      outFile: destinationCSS,
      sourceComments: true
    }))
    .pipe(new GulpAutoprefixer())
    .pipe(gulp.dest(destinationCSS))
    .pipe(browserSync.stream());
});

gulp.task('copy', () => {
  gulp.src(sourceSVG)
    .pipe(gulp.dest(destinationSVG));
  gulp.src('./src/client/pdf/**/*.pdf')
    .pipe(gulp.dest(destination + 'pdf/'));
  gulp.src('./src/client/img/**/*.*')
    .pipe(gulp.dest(destination + 'img/'));
});

gulp.task('build', ['build:sass', 'copy', 'build:js']);

gulp.task('watch', ['build', 'browser-sync'], () => {
  return gulp.watch(watchPaths, ['build'])
    .on('change', (e) => { console.log('\nFile ' + e.path + ' was ' + e.type + ', running js task'); });
});

gulp.task('browser-sync', () => {
  browserSync.init({
    proxy: 'localhost:5000'
  });
});
