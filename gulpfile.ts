var gulp = require('gulp');
var path = require('path');
var yargs = require('yargs').argv;
var tpl = require('gulp-template');
var rename = require('gulp-rename');

let toUppercase = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

let toLowerCase = (name: string) => {
  return name.charAt(0).toLowerCase() + name.slice(1);
};

gulp.task('createSlice', function () {
  var name = yargs.name;
  const templatePath = `templates/store/slice.ts`;
  const destinationPath = `src/store/${toLowerCase(name)}`;

  return gulp
    .src(templatePath)
    .pipe(
      tpl({
        name: toLowerCase(name),
        upCaseName: toUppercase(name),
      }),
    )
    .pipe(gulp.dest(destinationPath));
});

gulp.task('createScreen', function () {
  var name = yargs.name;
  let containerTemplatePath = `templates/screen/container.tsx`;
  let screenDestinationPath = `src/screens/${toUppercase(name)}`;

  let tplObj = {
    name: name.toLowerCase(),
    upCaseName: toUppercase(name),
  };

  gulp
    .src(containerTemplatePath)
    .pipe(tpl(tplObj))
    .pipe(
      rename((path: any) => {
        path.basename = `${tplObj.upCaseName}.container`;
      }),
    )
    .pipe(gulp.dest(screenDestinationPath));

  containerTemplatePath = `templates/screen/index.tsx`;
  gulp
    .src(containerTemplatePath)
    .pipe(tpl(tplObj))
    .pipe(gulp.dest(screenDestinationPath));

  const componentTemplatePath = `templates/screen/component.tsx`;
  return gulp
    .src(componentTemplatePath)
    .pipe(tpl(tplObj))
    .pipe(
      rename((path: any) => {
        path.basename = `${tplObj.upCaseName}.component`;
      }),
    )
    .pipe(gulp.dest(screenDestinationPath));
});
