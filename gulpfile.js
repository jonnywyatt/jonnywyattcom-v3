/* eslint-disable no-console */

import gulp from 'gulp' ;
import GulpAutoprefixer from 'gulp-autoprefixer';
import envify from 'envify';
import sass from 'gulp-sass';
import del from 'del' ;
import Browserify from 'browserify' ;
import babelify from 'babelify' ;
import VinylSourceStream from 'vinyl-source-stream';

const bundle = 'client.js';
const sourcePathJS = './src/client/';
const index = sourcePathJS + 'index.jsx';
const sourceSASS = './src/client/sass/**/*.scss';
const watchPaths = [sourcePathJS + '**/*.*', './src/common/**/*.*', sourceSASS, './node_modules/tes-sass/**/*'];
const destination = './public/';
const destinationJS = destination + 'js/';
const destinationCSS = destination + 'css/';

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
      this.emit('end');
    })
    .pipe(new VinylSourceStream(bundle))
    .pipe(gulp.dest(destinationJS));
});

gulp.task('build:sass', () => {
  gulp.src(sourceSASS)
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(new GulpAutoprefixer())
    .pipe(gulp.dest(destinationCSS));
});

gulp.task('build', ['build:sass', 'build:js']);

gulp.task('watch', ['build'], () => {
  return gulp.watch(watchPaths, ['build'])
    .on('change', (e) => { console.log('\nFile ' + e.path + ' was ' + e.type + ', running js task'); });
});
