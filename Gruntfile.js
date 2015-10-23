module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // uglify: {
    //   build: {
    //     src: 'dev/js/*.js',
    //     dest: 'dist/js/main.min.js'
    //   }
    // }
    jshint: {
      all: ['Gruntfile.js', 'dev/js/*.js']
    }
  });

  // Load in Grunt's plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  // Default tasks
  grunt.registerTask('default', ['jshint']);

};

