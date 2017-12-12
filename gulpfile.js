const gulp = require('gulp'),
sass = require('gulp-sass'),
imagemin = require('gulp-imagemin'),
browserSync = require('browser-sync'),
mmq = require('gulp-merge-media-queries'),
cssnano      = require('gulp-cssnano'),
sourcemaps   = require('gulp-sourcemaps'),
autoprefixer = require('gulp-autoprefixer'),
concat = require('gulp-concat'),
mainBowerFiles = require('gulp-main-bower-files'),
del = require('del'),
uglify = require('gulp-uglify'),
babel = require('gulp-babel'),
plumber = require('gulp-plumber'),
streamqueue = require('streamqueue'),
rename = require("gulp-rename"),
gulpFilter = require('gulp-filter');

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



// gulp.task('jslibs', function () {
//   var filterJS = gulpFilter('**/*.js', { restore: true });
//   return gulp.src('./bower.json')
//   .pipe(mainBowerFiles())
//   .pipe(filterJS)
//   .pipe(concat('libs.js'))
//   .pipe(uglify())
//   //.pipe(rename({
//   //    suffix: '.min'
//   //}))
//   .pipe(gulp.dest('prod/js'))
//   .pipe(browserSync.reload({
//     stream: true
//   }));
// });
gulp.task('jslibs', function () {
  var filterJS = gulpFilter('**/*.js', { restore: true });
  streamqueue(
     { objectMode: true },
     gulp.src('./bower.json').pipe(mainBowerFiles()).pipe(filterJS),
     gulp.src('src/js/vendors/*.js')
  )
  .pipe(concat('libs.js'))
  .pipe(uglify())
  .pipe(rename({
     suffix: '.min'
  }))
  .pipe(gulp.dest('prod/js'))
  .pipe(browserSync.reload({
    stream: true
  }));
});





gulp.task('appjs', () => {
   return  gulp.src('src/js/*')
    .pipe(plumber())
    .pipe(babel({
        presets: ['env']
    }))
    //.pipe(uglify())
    //.pipe(rename({
    //    suffix: '.min'
    //}))
    .pipe(gulp.dest(`prod/js`))
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

gulp.task('default', ['sass', 'html','jslibs','appjs','del','img','fonts','server'], () => {
  gulp.watch('src/img/*', ['img']);
  gulp.watch('src/*.html', ['html']);
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('src/fonts/*', ['fonts']);
  gulp.watch('src/js/*', ['appjs']);
});
