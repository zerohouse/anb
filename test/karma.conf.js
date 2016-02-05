module.exports = function(config) {
    'use strict';

    config.set({
        autoWatch: true,
        basePath: '../',
        frameworks: [
            "jasmine"
        ],

        files: [
            // bower:js
            'bower_components/angular/angular.js',
            'bower_components/angular-essential/angular-essential.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-aria/angular-aria.js',
            'bower_components/angular-messages/angular-messages.js',
            'bower_components/angular-material/angular-material.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            // endbower
            'node_modules/angular-mocks/angular-mocks.js',

            "app/{,*/}*.js",
            "test/mock/**/*.js",
            "test/spec/{,*/}*.js"
        ],

        exclude: [
        ],

        port: 8080,

        browsers: [
            "PhantomJS"
        ],

        plugins: [
            "karma-phantomjs-launcher",
            "karma-jasmine",
            'karma-babel-preprocessor'
        ],

        singleRun: false,

        colors: true,

        // LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        preprocessors: {
            'app/**/*.js': ['babel'],
            'test/**/*.js': ['babel']
        },

        babelPreprocessor: {
            options: {
                presets: ['es2015'],
                sourceMap: 'inline'
            },
            filename: function (file) {
                return file.originalPath.replace(/\.js$/, '.es5.js');
            },
            sourceFileName: function (file) {
                return file.originalPath;
            }
        }

    });
};