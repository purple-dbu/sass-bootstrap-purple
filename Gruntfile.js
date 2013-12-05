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
        tasks: ['dist-css']
      }
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // CSS distribution task.
  grunt.registerTask('dist-css', ['sass:development', 'sass:production']);

  // Fonts distribution task.
  grunt.registerTask('dist-fonts', ['copy']);

  // Full distribution task.
  grunt.registerTask('dist', ['clean', 'dist-css', 'dist-fonts']);

  // Default task.
  grunt.registerTask('default', ['dist']);

};
