/* jshint node: true */

module.exports = function(grunt) {
  "use strict";

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
            ' * Purple theme for Twitter Bootstrap 3 (Sass) v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= _.pluck(pkg.licenses, "url").join(", ") %>\n' +
            ' */\n\n',

    // Task configuration.
    clean: {
      dist: ['dist']
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: '.'
        }
      }
    },

    sass: {
      options: {
        unixNewlines: true,
        loadPath: [
          'bower_components'
        ],
        compass: true
      },
      development: {
        options: {
          style: 'expanded',
          lineNumbers: true,
          sourcemap: true
        },
        files: {
          'dist/css/bootstrap-purple.css': 'scss/bootstrap-purple.scss'
        }
      },
      production: {
        options: {
          style: 'compressed',
          banner: '<%= banner %>'
        },
        files: {
          'dist/css/bootstrap-purple.min.css': 'scss/bootstrap-purple.scss'
        }
      }
    },

    copy: {
      fonts: {
        expand: true,
        src: ['fonts/*'],
        dest: 'dist/'
      },
      images: {
        expand: true,
        src: ['images/*'],
        dest: 'dist/'
      },
      'bootstrap-fonts': {
        expand: true,
        flatten: true,
        src: ['bower_components/sass-bootstrap/dist/fonts/*'],
        dest: 'dist/fonts'
      },
      'bootstrap-js': {
        expand: true,
        flatten: true,
        src: ['bower_components/sass-bootstrap/dist/js/*'],
        dest: 'dist/js'
      }
    },

    watch: {
      sass: {
        files: 'scss/*.scss',
        tasks: ['dist-sass']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          'index.html',
          'scss/*.scss'
        ],
        tasks: []
      }
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Development task
  grunt.registerTask('serve', [
    'dist',
    'connect:livereload',
    'watch'
  ]);

  // CSS distribution task.
  grunt.registerTask('dist-sass', ['sass:development', 'sass:production']);

  // Assets distribution task.
  grunt.registerTask('dist-assets', [
    'copy:fonts',
    'copy:images',
    'copy:bootstrap-fonts',
    'copy:bootstrap-js'
  ]);

  // Full distribution task.
  grunt.registerTask('dist', ['clean', 'dist-sass', 'dist-assets']);

  // Default task.
  grunt.registerTask('default', ['dist']);

};
