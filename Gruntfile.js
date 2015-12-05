module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['dist', 'tmp'],
    processhtml: {
      // Swaps the urls from dev files like jquery.js to minified production files like jquery.min.js
      dist: {
        files: {
          'tmp/index.html': ['dev/index.html'],
          'tmp/about.html': ['dev/about.html'],
          'tmp/contact.html': ['dev/contact.html'],
        }
      }
    },
    jshint: {
        all: ['Gruntfile.js', 'dev/js/*.js']
    },
    copy: {
      main: {
        files: [
          // jQuery
          {expand: true, flatten: true, src: ['bower_components/jquery/dist/jquery.min.js'], dest: 'dist/js', filter: 'isFile'},
          // Bootstrap JS
          {expand: true, flatten: true, src: ['bower_components/bootstrap/dist/js/bootstrap.min.js'], dest: 'dist/js', filter: 'isFile'},
          // Bootstrap CSS 
          {expand: true, flatten: true, src: ['bower_components/bootstrap/dist/css/bootstrap.min.css'], dest: 'dist/css', filter: 'isFile'} ,
          // Bootstrap Fonts
          {expand: true, flatten: true, src: ['bower_components/bootstrap/dist/fonts/*'], dest: 'dist/fonts', filter: 'isFile'},
          // HTML files with URL's swapped
          {expand: true, flatten: true, src: ['tmp/*'], dest: 'dist/', filter: 'isFile'},
        ],
      }
    },
    uglify: {
      build: {
        src: 'dev/js/*.js',
        dest: 'dist/js/main.min.js'
      }
    },
    htmlmin: { 
      dist: { 
        options: { 
          removeComments: true,
          collapseWhitespace: true
        },
        files: { 
          // Place your html files here so that they can be copied to dist
          'dist/index.html': 'tmp/index.html', 
          'dist/about.html': 'tmp/about.html', 
          'dist/contact.html': 'tmp/contact.html'
        }
      }    
    },
    cssmin: {
      target: {
        files: {
          'dist/css/style.min.css': ['dev/css/style.css', 'dev/css/style2.css'] 
        }
      }
    },
  }); // grunt.initConfig
  
  // Load in Grunt's plugins
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default tasks
  grunt.registerTask('default', ['clean', 'processhtml', 'jshint', 'copy', 'uglify', 'htmlmin', 'cssmin']);

};

