module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
        all: ['Gruntfile.js', 'dev/js/*.js']
    },
    clean: ['dist/'],
    copy: {
      main: {
        files: [
          {expand: true, flatten: true, src: ['bower_components/jquery/dist/jquery.min.js'], dest: 'dist/js', filter: 'isFile'},

          {expand: true, flatten: true, src: ['bower_components/bootstrap/dist/js/bootstrap.min.js'], dest: 'dist/js', filter: 'isFile'},

          {expand: true, flatten: true, src: ['bower_components/bootstrap/dist/css/bootstrap.min.css'], dest: 'dist/css', filter: 'isFile'} ,

          {expand: true, flatten: true, src: ['bower_components/bootstrap/dist/fonts/*'], dest: 'dist/fonts', filter: 'isFile'},
        ],
      }
    },
    uglify: {
      build: {
        src: 'dev/js/*.js',
        dest: 'dist/js/main.min.js'
      }
    }
  });
  
  // Load in Grunt's plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default tasks
  grunt.registerTask('default', ['jshint', 'clean', 'copy']);

};

