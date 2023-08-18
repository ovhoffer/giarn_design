const gulp = require('gulp');
const sass  = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
var babel = require("gulp-babel");
var runSequence = require('run-sequence');



// gulp.task('sass-compile', function () {
//    return gulp.src('./src/**/*.scss')
//       .pipe(sourcemaps.init())
//       .pipe(sass().on('error', sass.logError))
//    //   .pipe(sourcemaps.write('./'))
//       .pipe(gulp.dest('./dist/css'))
//       //.pipe(gulp.)
// })
gulp.task('watch', function () {
   gulp.watch('src/index.js', gulp.series('default'));
   gulp.watch('src/index.html', gulp.series('html-replacement'));
   gulp.watch('src/index.html', gulp.series('css-replacement'));
   gulp.watch('src/index.html', gulp.series('images-replacement'));
})

gulp.task("default", function () {
  return gulp.src("src/index.js")
    .pipe(babel({
      presets: ["@babel/preset-env"]
    }))
    .pipe(gulp.dest("dist"));
});

gulp.task("html-replacement", function () {
   return gulp.src("src/index.html")
     .pipe(gulp.dest("dist"));
});

gulp.task("css-replacement", function () {
   return gulp.src("src/style.css")
     .pipe(gulp.dest("dist/style"));
});

gulp.task("images-replacement", function () {
   return gulp.src("src/images/**/*")
     .pipe(gulp.dest("dist"));
});


// gulp.task('develop', function(done) {
//    runSequence('sass-compile', 'default', 'html-copy', 'watch' );
// });
gulp.task('develop', gulp.series('default', 'html-replacement', 'css-replacement', 'images-replacement',  'watch'))