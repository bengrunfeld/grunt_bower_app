module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'dev/js/*.js',
        dest: 'dist/js/main.min.js'
      }
    }
  });

  // Load the uglify plugin
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default tasks
  grunt.registerTask('default', ['uglify']);

};

