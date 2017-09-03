var gulp = require('gulp');
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var babel = require('gulp-babel');
var es2015 = require("babel-preset-es2015");

// var sass = require('gulp-sass');

var www ='www/',
    srcHtml = 'index.html',
    srcTpl = 'tpls/**',
    dstTpl = 'www/tpls',
    srcFw='framework/**',
    dstFw='www/framework';
    srcJs='js/*.js',
    dstJs='www/js';
    srcCss='css/',
    dstCss='www/css';
gulp.task('html',function(){
  return gulp.src(srcHtml)
        .pipe(gulp.dest(www))
        .pipe(connect.reload())
});

// gulp.task('css',function(){
//   return gulp.src(srcCss)
//         .piep(sass())
//         .pipe(gulp.dest(dstCss))
//         .pipe(connect.reload())
// })

gulp.task('scripts',function(){
  return gulp.src(srcJs)
        .pipe(babel({presets:['es2015']}))
        .pipe(jshint())
        .pipe(jshint.reporter(''))
        .pipe(gulp.dest(dstJs))
        .pipe(connect.reload())
        
})

gulp.task('cop',function(){
  return gulp.src(srcFw)
        .pipe(gulp.dest(dstFw))
        .pipe(connect.reload())
});

gulp.task('copy',function(){
  return gulp.src(srcTpl)
        .pipe(gulp.dest(dstTpl))
});
 
 gulp.task('webserver',function(){
    connect.server({
      livereload:true
    });
 }); 

gulp.task('watch',function(){
  gulp.watch(srcHtml,['html']);
  gulp.watch(srcTpl,['cop']);
  gulp.watch(srcJs,['scripts']);
});

gulp.task('default',['html','copy','cop','scripts','watch','webserver']);