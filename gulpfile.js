const gulp = require('gulp'),
sass = require('gulp-sass'),
imagemin = require('gulp-imagemin'),
browserSync = require('browser-sync'),
mmq = require('gulp-merge-media-queries'),
cssnano      = require('gulp-cssnano'),
sourcemaps   = require('gulp-sourcemaps'),
autoprefixer = require('gulp-autoprefixer'),
del = require('del');

gulp.task('sass', function () {
  return gulp.src('src/sass/**/*.scss')
  .pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
  .pipe(mmq())
  //.pipe(cssnano())
  .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
  .pipe(gulp.dest('prod/css'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

gulp.task('html', function () {
  gulp.src('src/*.html')
  .pipe(gulp.dest('prod/'))
  .pipe(browserSync.reload({
    stream: true
  }));
});
gulp.task('fonts', function () {
  gulp.src('src/fonts/*')
  .pipe(gulp.dest('prod/fonts'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

gulp.task('img', () =>
gulp.src('src/img/*')
.pipe(imagemin())
.pipe(gulp.dest('prod/img'))
);

gulp.task('server', ['img'], () => {
  browserSync({
    server: {
      baseDir: './prod/'
    },
    notify: false
  });
});

gulp.task('del', () => {
  return del.sync('prod/**/*');
});

gulp.task('default', ['sass', 'html','del','img','fonts','server'], () => {
  gulp.watch('src/img/*', ['img']);
  gulp.watch('src/*.html', ['html']);
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('src/fonts/*', ['fonts']);
});
