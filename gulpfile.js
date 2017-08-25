var gulp = require('gulp');

var www ='www/',
    srcHtml = 'index.html',
    srcTpl = 'tpls/**',
    dstTpl = 'www/tpls',
    srcFw='framework/**',
    dstFw='www/framework';
    srcJs='js/**',
    dstJs='www/js';
    srcCss='css/',
    dstCss='www/css',
gulp.task('html',function(){
  return gulp.src(srcHtml)
        .pipe(gulp.dest(www))
});

gulp.task('scripts',function(){
  return gulp.src(srcJs)
        .pipe(gulp.dest(dstJs))
})

gulp.task('cop',function(){
  return gulp.src(srcFw)
        .pipe(gulp.dest(dstFw))
});

gulp.task('copy',function(){
  return gulp.src(srcTpl)
        .pipe(gulp.dest(dstTpl))
});
  
gulp.task('default',['html','copy','cop','scripts'],function(){

});