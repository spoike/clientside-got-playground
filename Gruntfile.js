module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        open: {
            dev: {
                path: 'http://localhost:8000'
            }
        },
        connect: {
            server: {
                    options: {
                    port: 8000,
                    base: './www'
                }
            }
        },
        watch: {
            scripts: {
                files: ['www/**/*.js', '!www/scripts/vendor/*.js', '!www/scripts/require*'],
                tasks: ['jshint:scripts', 'karma:unit']
            },
            tests: {
                files: ['test/**/*.js', '!test/vendor/*.js'],
                tasks: ['jshint:tests', 'karma:unit']
            },
            gruntfile: {
                files: ['Gruntfile.js'],
                tasks: ['jshint:gruntfile']
            }
        },
        jshint: {
            scripts: {
                options: {
                    es3: true,
                },
                src: ['<%= watch.scripts.files %>']
            },
            tests: {
                options: {
                    es3: true,
                    expr: true
                },
                src: ['<%= watch.tests.files %>']
            },
            gruntfile: ['<%= watch.gruntfile.files %>']
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true,
                reporters: 'dots'
            }
        }
    });
    
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    
    grunt.registerTask('default', ['connect', 'open:dev', 'watch']);

};