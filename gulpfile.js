/* eslint-disable no-console */

import gulp from 'gulp' ;
import GulpAutoprefixer from 'gulp-autoprefixer';
import envify from 'envify';
import sass from 'gulp-sass';
import del from 'del' ;
import Browserify from 'browserify' ;
import babelify from 'babelify' ;
import VinylSourceStream from 'vinyl-source-stream';
import browserSync from 'browser-sync';
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
    fullPaths: true,
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
    .pipe(new VinylSourceStream(bundle))
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

gulp.task('build:svg', () => {
  gulp.src(sourceSVG)
    .pipe(gulp.dest(destinationSVG));
});

gulp.task('build', ['build:sass', 'build:svg', 'build:js']);

gulp.task('watch', ['build', 'browser-sync'], () => {
  return gulp.watch(watchPaths, ['build'])
    .on('change', (e) => { console.log('\nFile ' + e.path + ' was ' + e.type + ', running js task'); });
});

gulp.task('browser-sync', () => {
  browserSync.init({
    proxy: 'localhost:5000'
  });
});
