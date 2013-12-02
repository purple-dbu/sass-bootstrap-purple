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

    compass: {
      options: {
        sassDir: 'scss',
        cssDir: 'dist',
        imagesDir: 'images',
        javascriptsDir: 'scripts',
        fontsDir: 'fonts',
        importPath: 'bower_components',
        httpImagesPath: '../images',
        httpFontsPath: '../fonts',
        relativeAssets: true,
        assetCacheBuster: false,
        banner: '<%= banner %>'/*,
        raw: 'sass_options = {:sourcemap => true}'*/
      },
      development: {
        options: {
          environment: 'development',
          specify: 'scss/theme-purple.scss'
        }
      },
      production: {
        options: {
          environment: 'production',
          specify: 'scss/theme-purple.min.scss'
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
      compass: {
        files: 'scss/*.scss',
        tasks: ['dist-css']
      }
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // CSS distribution task.
  grunt.registerTask('dist-css', ['compass:development', 'compass:production']);

  // Fonts distribution task.
  grunt.registerTask('dist-fonts', ['copy']);

  // Full distribution task.
  grunt.registerTask('dist', ['clean', 'dist-css', 'dist-fonts']);

  // Default task.
  grunt.registerTask('default', ['dist']);

};
