/**
 * Created by colinjlacy on 1/20/15.
 */
module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        concat: {
            options: {
                separator: ''
            },
            angular: {
                src: ['app/controllers/*.js', 'app/directives/*.js', 'app/services/*.js'],
                dest: 'app/modules.js'
            },
            bootstrap: {
                src: ['bower_components/bootstrap-less/js/*.js'],
                dest: 'js/bootstrap.js'
            }
        },
        wiredep: {
            target: {
                src: [
                    'index.html'
                ]
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true,
                    $: true,
                    angular: true
                }
            }
        },
        connect: {
            task: { // give your task a name
                options: {
                    port: 3000 // configure your port here
                }
            }
        },
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "css/site.css": "less/site.less" // destination file and source file
                }
            }
        },
        watch: {
            styles: {
                files: ['less/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            },
            scripts: {
                files: ['app/*/*.js'],
                tasks: ['concat', 'jshint']
            }
        }
    });

    grunt.registerTask('default', ['connect', 'less', 'concat', 'jshint', 'wiredep', 'watch']);

};