var GulpConfig = (function () {
    function gulpConfig() {

        this.source = './app';

        this.outputJs = './app/dist/scripts/';
        this.outputScss = './app/dist/styles';
        this.outputScripts = './app/dist/scripts';
        this.outputFonts = './app/dist/fonts';
        this.serverFilesJs = 'server/**/*.js';
        this.serverJs = 'server/server.js';
        this.devJs = ['./app/dev/**/*.js', '!./app/dev/assets/scripts/**/*.js'];
        this.devImages = 'app/dev/assets/images/**/*';
        this.devHtml = './app/dev/**/*.html';
        this.devIndexHtml = 'app/dist/index.html';
		this.devAllHtml = [this.devHtml, this.devIndexHtml];
        this.devScss = './app/dev/assets/sass/**/*.scss';
        this.devScssMain = './app/dev/assets/sass/main.scss';
        this.vendorJs = [
        	'./node_modules/jquery/dist/jquery.min.js',
		    './app/dev/assets/scripts/ntc.js',
		    './node_modules/angular/angular.min.js',
		    './node_modules/angular-animate/angular-animate.min.js',
		    './node_modules/angular-messages/angular-messages.min.js',
		    './node_modules/angular-resource/angular-resource.min.js',
		    './node_modules/angular-sanitize/angular-sanitize.min.js',
		    './node_modules/angular-touch/angular-touch.min.js',
		    './node_modules/angular-ui-router/release/angular-ui-router.min.js',
		    './node_modules/angular-google-chart/ng-google-chart.min.js',
		    './node_modules/foundation-sites/dist/foundation.min.js'
		];
		this.vendorCss = [
		    './node_modules/font-awesome/css/font-awesome.min.css',
		    './node_modules/foundation-sites/dist/foundation.min.css'
		];
		this.vendorFonts = [
			'./node_modules/font-awesome/fonts/*'
		];
		this.sassOptions = {
			errLogToConsole: true,
            sourceComments: 'normal',
            indentedSyntax: true,
  			outputStyle: 'expanded'
		};
		this.htmlOptions = {
			'attr-lowercase': true,
			'attr-no-duplication': true,
			'attr-value-double-quotes': true,
			'attr-value-not-empty': true,
			'doctype-html5': false,
			'doctype-first': false,
			'head-script-disabled': true,
			'id-class-value': true,
			'id-unique': true,
			'img-alt-require': true,
		  	'spec-char-escape': true,
			'style-disabled': false,
			'tag-self-close': true,
			'tagname-lowercase': true
		};
		this.plumberOptions = {
	        handleError: function (err) {
	            console.log(err);
	            this.emit('end');
	        }
	    };
    }
    return gulpConfig;
})();
module.exports = GulpConfig;