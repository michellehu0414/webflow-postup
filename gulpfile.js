const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const puppeteer = require('puppeteer');
const fs = require('fs');

// Task to compile SCSS to CSS
gulp.task('scss', function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            autoprefixer(),
            cssnano() // Use cssnano for CSS optimization
        ]))
        .pipe(gulp.dest('dist/css'));
});

// Task to remove unused CSS using Puppeteer
gulp.task('uncss', async function() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`file://${__dirname}/index.html`); // Adjust the path to your HTML file

    const cssContent = await page.evaluate(() => {
        const stylesheets = Array.from(document.styleSheets);
        let css = '';
        stylesheets.forEach(sheet => {
            Array.from(sheet.cssRules).forEach(rule => {
                css += rule.cssText;
            });
        });
        return css;
    });

    await browser.close();
    fs.writeFileSync('dist/css/cleaned.css', cssContent);
});

// Default task to run both tasks in sequence
gulp.task('default', gulp.series('scss', 'uncss'));
