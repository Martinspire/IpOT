var GulpConfig = (function () {
    function gulpConfig() {

        this.source = './app';

        this.outputJs = './app/dist/scripts/';
        this.outputScss = './app/dist/styles';
        this.outputScripts = './app/dist/scripts';
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
        	'./node_modules/jquery/dist/jquery.js',
		    './node_modules/chart.js/Chart.js',
		    './app/dev/assets/scripts/MobileServices.Web-1.2.5.min.js',
		    './app/dev/assets/scripts/ntc.js',
		    './node_modules/angular/angular.js',
		    './node_modules/angular-ui-router/release/angular-ui-router.js',
		    './node_modules/angular-chart.js/dist/angular-chart.js',
		    './node_modules/angular-azure-mobile-service/dist/angular-azure-mobile-service.js',
		    './node_modules/foundation-sites/dist/foundation.js'
		];
		this.vendorCss = [
		    './node_modules/foundation-sites/dist/foundation.min.css',
		    './node_modules/angular-chart.js/dist/angular-chart.css'
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
    }
    return gulpConfig;
})();
module.exports = GulpConfig;