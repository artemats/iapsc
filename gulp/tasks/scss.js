import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import cleanCss from "gulp-clean-css";
import gulpautoprefixer from "gulp-autoprefixer";
import autoprefixer from "autoprefixer";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import postcss from "gulp-postcss";
import tailwindcss from "tailwindcss";

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss, {sourcemaps: app.isDev})

    .pipe(sass({outputStyle: "expanded"}))
    .pipe(gulpautoprefixer({
      grid: true,
      overrideBrowserlist: ["last 3 versions"],
      cascade: true
    }))
    .pipe(
      postcss([tailwindcss('./tailwind.config.cjs'), autoprefixer()]),
    )
    .pipe(groupCssMediaQueries())
    .pipe(cleanCss())
    .pipe(rename({ extname: ".min.css" }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream())
}