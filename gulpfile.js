/* eslint-disable no-console */

const gulp = require('gulp');
const GulpAutoprefixer = require('gulp-autoprefixer');
const envify = require('envify');
const sass = require('gulp-sass');
const del = require('del');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserSync = require('browser-sync');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const rev = require('gulp-rev');
const rename = require('gulp-rename');
const gulpif = require('gulp-if');
const argv = require('yargs').argv;

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

gulp.task('clean', () => {
  return del([destination]);
});

gulp.task('build:js', () => {
  const isProduction = argv.production;
  const browserifyOpts = {
    cache: {},
    debug: true,
    packageCache: {},
    extensions: ['.jsx', '.js']
  };
  return browserify(index, browserifyOpts)
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
    .pipe(gulpif(isProduction, uglify()))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(destinationJS))
    .pipe(gulpif(isProduction, rev()))
    .pipe(gulpif(isProduction, gulp.dest(destinationJS)))
    .pipe(gulpif(isProduction, rev.manifest({
      base: destination,
      merge: true
    })))
    .pipe(gulpif(isProduction, gulp.dest(destinationJS)));
});

gulp.task('build:sass', () => {
  gulp.src(sourceSASS)
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'compressed'
    }))
    .pipe(new GulpAutoprefixer())
    .pipe(rename('css.hbs'))
    .pipe(gulp.dest(destinationCSS));
});

gulp.task('copy', ['clean'], () => {
  gulp.src(sourceSVG)
    .pipe(gulp.dest(destinationSVG));
  gulp.src('./src/client/pdf/**/*.pdf')
    .pipe(gulp.dest(destination + 'pdf/'));
  gulp.src('./src/client/img/**/*.*')
    .pipe(gulp.dest(destination + 'img/'));
  gulp.src('./src/client/fonts/**/*.*')
    .pipe(gulp.dest(destination + 'fonts/'));
  gulp.src('./src/client/*.txt')
    .pipe(gulp.dest(destination));
});

gulp.task('build', ['copy', 'build:sass', 'build:js']);

gulp.task('watch', ['build'], () => {
  return gulp.watch(watchPaths, ['build'])
    .on('change', (e) => { console.log('\nFile ' + e.path + ' was ' + e.type + ', running js task'); });
});

gulp.task('browser-sync', () => {
  browserSync.init({
    proxy: 'localhost:5000'
  });
});
