/**
 * Created by colinjlacy on 1/20/15.
 */
module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
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
                    "assets/css/app.css": "less/app.less", // destination file and source file
                    "assets/css/edit.css": "less/edit.less" // destination file and source file
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
                files: ['edit/webapp/*/*.js', 'js/**/*.js', '!js/lib/*.js'],
                tasks: ['jshint']
            }
        }
    });

    grunt.registerTask('default', ['jshint', 'less', 'watch']);

};