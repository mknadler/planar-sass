module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    concat: {
      dist: {
        src: ['src/_settings.scss', 'src/index.scss'],
        dest: 'lib/planar.scss'
      }
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'demo/demo.css': 'demo/demo.scss'
        }
      }
    }

  });
}