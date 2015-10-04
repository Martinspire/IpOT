'use strict';  
var GulpConfig = (function () {
    function gulpConfig() {

        this.source = './app';

        this.tsOutputPath = './app/dist/scripts/';             //This holds all your compiled ts
        this.allJavaScript = ['./app/dev/**/*.js'];          //This is the folder with the javascript files
        this.allTypeScript =  './app/dev/**/*.ts';                   //This is the path to your typescript files
        this.libraryTypeScriptDefinitions = './typings/**/*.ts'; //This is the path to the d.ts files
    }
    return gulpConfig;
})();
module.exports = GulpConfig;