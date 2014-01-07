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
          debugInfo: true,
          lineNumbers: true,
          sourcemap: true
        },
        files: {
          'dist/bootstrap-purple.css': 'scss/bootstrap-purple.scss',
          'dist/bootstrap-purple-theme.css': 'scss/bootstrap-purple-theme.scss'
        }
      },
      production: {
        options: {
          style: 'compressed',
          banner: '<%= banner %>'
        },
        files: {
          'dist/bootstrap-purple.min.css': 'scss/bootstrap-purple.scss',
          'dist/bootstrap-purple-theme.min.css': 'scss/bootstrap-purple-theme.scss'
        }
      }
    },

    copy: {
      fonts: {
        expand: true,
        src: ["fonts/*"],
        dest: 'dist/'
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

  // Fonts distribution task.
  grunt.registerTask('dist-fonts', ['copy']);

  // Full distribution task.
  grunt.registerTask('dist', ['clean', 'dist-sass', 'dist-fonts']);

  // Default task.
  grunt.registerTask('default', ['dist']);

};
