module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);


  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    connect: {
      test: {
        options: {
          port: 8000,
          base: '.'
        }
      }
    },

    sass: {
      options: {
        unixNewlines: true,
        trace: true,
        //check: true,// Just check the syntaxis
        noCache: true,
      },
      prod: {
        options: {
          style: 'compressed', // Output style. Can be nested, compact, compressed, expanded.
        },
        files: {
          'css/main_styles.prod.css': ['scss/main_styles.scss'],
        }
      },
      dev: {
        options: {
          style: 'expanded', // Output style. Can be nested, compact, compressed, expanded.
        },
        files: {
          'css/main_styles.dev.css': ['scss/main_styles.scss'],
        }
      },
    },

    watch: {
      sass2css: {
        files: 'scss/**/*.scss',
        tasks: ['sass:dev'],
      }
    },

    autoprefixer: {

      options: {
        browsers: ['last 2 versions', 'ie 7', 'ie 8', 'ie 9'],
        map: true,
        remove: false, // remove old prefs
        //diff: true, /// create diff file
        safe: false,
      },


      dev: {
        options: {
          diff: true, /// create diff file
        },

        //cwd: 'css/',
        src: './css/main_styles.dev.css',
        //dest: './css/',

      }

    },

    csscomb: {
      options: {
        config: './csscomb_config.json'
      },
      dev: {
        expand: true, // !important
        src: 'css/main_styles.dev.css',
        dest: './',
        //tasks: ['autoprefixer:dev'],

      },
      allcss: {
        expand: true,
        cwd: 'css/',
        //src: ['*.*.css', '*.css', '!*.prod.css'],
        src: ['*.*.css', '*.css'],
        dest: 'css/',
        ext: '.new.css',
      },
      sass: {
        expand: true,
        cwd: 'scss/',
        src: ['**/*.scss'],
        dest: 'scss/',
      },
    },

    clean: {
      prod: {
        src: ["css/*.css", "css/*.map", "css/*.diff"],
      }
    }

  }),

    // Batch tasks config

    grunt.registerTask("dev", [

      'clean:prod',
      'sass:dev',
      //'autoprefixer:dev',

    ]);

  grunt.registerTask("prod", [

    'csscomb:sass',
    'clean:prod',
    'sass:prod',
    //'cssmin',

  ]);

  grunt.registerTask("cp", [

    'copy:dev',

  ]);

  //grunt.loadNpmTasks('grunt-autoprefixer');
  //grunt.loadNpmTasks('grunt-contrib-cssmin');

};


