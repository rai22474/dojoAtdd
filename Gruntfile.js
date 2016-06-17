'use strict';

/* jshint varstmt: false */
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);


    grunt.initConfig({

        mochacli: {
            options: {
                ui: 'bdd',
                files: ['tests/**/*.js'],
                harmony: true
            },
            dev: {
                options: {
                    reporter: 'spec'
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: {
                src: [
                    'src/**/*.js',
                    'tests/**/*.js',
                    'acceptance-tests/**/*.js',
                    'Gruntfile.js'
                ]
            }
        }
    });

    grunt.registerTask(
        'performance',
        'Execute the performance test',
        ['exec:performance-test']
    );

    grunt.registerTask('cucumber', [
        'cucumberjs'
    ]);

    grunt.registerTask('test', [
        'mochacli'
    ]);

    grunt.registerTask(
        'build',
        'Compiles all of the assets and copies the files to the build directory.',
        ['mochacli', 'jshint', 'exec:clean-build', 'copy', 'exec:copy-node-modules', 'exec:prune-node-modules', 'compress']
    );
};
