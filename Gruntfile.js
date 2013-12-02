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
        banner: '<%= banner %>',
        unixNewlines: true,
        loadPath: [
          'bower_components'
        ]
      },
      development: {
        options: {
          style: 'expanded',
          debugInfo: true,
          lineNumbers: true,
          sourcemap: true
        },
        files: {
          'dist/bootstrap-theme-purple.css': 'scss/theme-purple.scss'
        }
      },
      production: {
        options: {
          style: 'compressed',
          banner: '<%= banner %>'
        },
        files: {
          'dist/bootstrap-theme-purple.min.css': 'scss/theme-purple.scss'
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
