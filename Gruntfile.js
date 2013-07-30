module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'style.css': 'style.scss'
                }
            }
        },
        csslint: {
            strict: {
                options: {
                    'known-properties': false,
                    'box-model': false
                },
                src: ['style.css']
            }
        },
        watch: {
            livereload: {
                files: ['*.scss'],
                tasks: ['sass'],
                options: {
                    livereload: true
                },
            },
        },
        connect: {
            uses_defaults: {}
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('default', ['connect', 'watch']);
};
