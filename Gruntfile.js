module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    less: {
      compile: {
        files: {
          'css/flexbox.css': 'less/_mixin-flexbox.less'
        },
      options: {
          compress: false
        }
      }
    },
    lesslint: {
      src: ['less/*'],
      options: {
        formatters: [
            {
              id: 'csslint-xml',
              dest: 'lesslint-report/lesslint.xml'
            }
         ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-lesslint')
  grunt.registerTask('default',['lesslint','less']);
};