const gulp        	= require('gulp'),
	watch         	= require('gulp-watch'),
	bs            	= require('browser-sync'),
	reload        	= bs.reload,
	browserify		= require('browserify'),
	watchify		= require('watchify'),
	buffer			= require('vinyl-buffer'),
	source			= require('vinyl-source-stream'),
	babelify		= require('babelify'),
	assign			= require('lodash.assign'),
	wrap			= require('gulp-wrap'),
	concat			= require('gulp-concat'),
	declare			= require('gulp-declare'),
	handlebars		= require('gulp-handlebars'),
	gutil         	= require('gulp-util'),
	gulpif        	= require('gulp-if'),
	sass          	= require('gulp-sass'),
	cssmin        	= require('cssnano'),
	postcss       	= require('gulp-postcss'),
	prefixer      	= require('autoprefixer'),
	sourcemaps    	= require('gulp-sourcemaps'),
	imagemin      	= require('gulp-imagemin'),
	pngquant      	= require('imagemin-pngquant'),
	babel         	= require('gulp-babel'),
	uglify        	= require('gulp-uglify'),
	fileinclude   	= require('gulp-file-include'),
	jsonmin       	= require('gulp-jsonminify'),
	cache         	= require('gulp-cache'),
	rename        	= require('gulp-rename'),
	del           	= require('del'),
	production 		= true;

let src     = './src',
    dist    = './assets',
    tmp		= './.tmp',
    srvDir	= tmp,
    //node    = './node_modules',
    pathSrc = {
        html:       src + '/index.html',
        scss:       src + '/styles/main.scss',
        jsMain:     src + '/js/main.js',
        jsVendor:   src + '/js/vendor.js',
        fonts:      src + '/fonts/**/*.*',
        img:        src + '/img/**/*.*'
    },
    pathWatch = {
        html:   src + '/**/*.html',
        js:     src + '/js/app/*.js',
        scss:   src + '/styles/**/*.scss',
        img:    src + '/img/**/*.*',
        fonts:  src + '/fonts/**/*.*'
    },
    pathDest    = {},
    defaultTask = 'watch';

function buildDest(dest) {
    pathDest.html   = dest + '/';
    pathDest.css    = dest + '/css/';
    pathDest.js     = dest + '/js/';
    pathDest.fonts  = dest + '/fonts/';
    pathDest.img    = dest + '/img/';
}

if (production) {
    defaultTask = 'build';
	buildDest(dist);
} else {
	buildDest(tmp);
}


gulp.task('html', function() {
    return gulp.src(pathSrc.html)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest(pathDest.html))
        .pipe(reload({
			stream: true
		}));
});


gulp.task('scss', function() {
	let plugins = [
		prefixer("last 2 versions", "> 1%"),
		cssmin()
	];
    return gulp.src(pathSrc.scss)
        .pipe(gulpif(!production, sourcemaps.init()))
        .pipe(sass({
            sourceMap: true,
            errLogToConsole: true
        }))
		.pipe(gulpif(production, postcss(plugins)))
        .pipe(rename('main.min.css'))
        .on('error', gutil.log)
        .pipe(sourcemaps.write("./", {
			addComment: false
		}))
        .pipe(gulp.dest(pathDest.css))
        .pipe(reload({
			stream: true
		}))
});


function optionsBrsf(entryFiles) {
	return assign({}, watchify.args, {
		entries: [entryFiles],
		debug: !production
	});;
}

let	bv = watchify(browserify(optionsBrsf(pathSrc.jsVendor)));
function bundleVendor() {
	return bv.bundle()
		.on('error', gutil.log.bind(gutil, 'Browserify Error'))
		.pipe(source('vendor.min.js'))
		.pipe(buffer())
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(gulpif(production, uglify()))
		.pipe(gulp.dest(pathDest.js))
        .pipe(reload({
			stream: true
		}));
}
gulp.task('jsVendor', bundleVendor);

let	bm = watchify(browserify(optionsBrsf(pathSrc.jsMain)));
function bundleMain() {
	return bm.bundle()
		.on('error', gutil.log.bind(gutil, 'Browserify Error'))
		.pipe(source('main.min.js'))
		.pipe(buffer())
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(gulpif(!production, sourcemaps.init()))
		.pipe(gulpif(production, uglify()))
		.pipe(sourcemaps.write("./", {
			addComment: false
		}))
		.pipe(gulp.dest(pathDest.js))
        .pipe(reload({
			stream: true
		}));
}
gulp.task('jsMain', bundleMain);
bm.on('update', bundleMain);
bm.on('log', gutil.log);


/*gulp.task('templates', function() {
	return gulp.src(src + '/templates/*.hbs')
		.pipe(handlebars({
			handlebars: require('handlebars')
		}))
		.pipe(wrap('Handlebars.template(<%= contents %>)'))
		.pipe(declare({
			root: 'exports',
			noRedeclare: true,
		}))
		.pipe(concat('templates.js'))
		.pipe(wrap('var Handlebars = require("handlebars");\n <%= contents %>'))
		.pipe(gulp.dest(src + '/js/'));
});*/


gulp.task('images', function() {
    return gulp.src(pathSrc.img)
        .pipe(cache(imagemin({
            progressive: true,
            interlaced: true,
            svgoPlugins: [{
				removeViewBox: false
			}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest(pathDest.img))
        .pipe(reload({
			stream: true
		}));
});


gulp.task('fonts', function() {
    return gulp.src(pathSrc.fonts).pipe(gulp.dest(pathDest.fonts));
});
gulp.task('fontVendor', function() {
    return gulp.src('node_modules/font-awesome/fonts/*.*').pipe(gulp.dest(pathDest.fonts));
});

gulp.task('json', function() {
    return gulp.src(src + '/*.json')
		.pipe(jsonmin())
		.pipe(gulp.dest(pathDest.html));
});


gulp.task('webserver', function() {
    if (production) {
        srvDir = dist;
    }
    
    bs({
        server: {
            baseDir: srvDir
        },
        host: 'localhost',
        port: 9000,
    });
});


gulp.task('clean', function() {
    return del.sync(srvDir);
});

// removed 'templates'
let builds = ['clean', 'html', 'scss', 'jsVendor', 'jsMain', 'fonts', 'fontVendor', 'images', 'json'];

gulp.task('watch', builds, function() {
    gulp.watch(pathWatch.html, ['html']);
    gulp.watch(pathWatch.scss, ['scss']);
    gulp.watch(pathSrc.jsVendor, ['jsVendor']);
    gulp.watch(pathWatch.js, ['jsMain']);
    gulp.watch(src + '/*.json', ['json']);
});

gulp.task('build', builds, function() {
    gulp.watch(pathWatch.html, ['html']);
    gulp.watch(pathWatch.scss, ['scss']);
    gulp.watch(pathSrc.jsVendor, ['jsVendor']);
    gulp.watch(pathWatch.js, ['jsMain']);
    gulp.watch(src + '/*.json', ['json']);
});

/*
gulp.task('build', builds);*/


gulp.task('default', [defaultTask, 'webserver']);